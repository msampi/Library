import axios from 'axios';
import {GET_SELLERS_URL} from '../../config';
import {UPLOAD_BOOKS_URL} from '../../config';

export function importHasError(bool) {
    return {
        type: 'IMPORT_HAS_ERROR',
        hasError: bool
    };
}

export function importIsLoading(bool) {
    return {
        type: 'IMPORT_IS_LOADING',
        isLoading: bool
    };
}

export function importSuccess(response) {
    return {
        type: 'IMPORT_SUCCESS',
        response
    };
}

export function uploadFile(file, distID) {
    return (dispatch) => {
        dispatch(importIsLoading(true));
        let data = new FormData();
        data.append('file', file);
        data.append('distID', distID);
        
        axios.post(UPLOAD_BOOKS_URL, data, {
            headers: {
            'Content-Type': 'multipart/form-data'
            }
        })
        .then(function (response) {
            if (response.status !== 200) {
                throw Error(response.statusText);
            }
            dispatch(importIsLoading(false));
            return response;
        })
        .then((response) => dispatch(importSuccess(response.data)))
        .catch(() => dispatch(importHasError(true)));
            
    };
  }

  export function sellersFetchDataSuccess(sellers) {
        return {
            type: 'SELLERS_FETCH_DATA_SUCCESS',
            sellers
        };
    }

  export function sellersFetchData() {
    return (dispatch) => {

        axios.get(GET_SELLERS_URL)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
  
                return response;
            })
            .then((response) => dispatch(sellersFetchDataSuccess(response.data)))
            
    };
  }