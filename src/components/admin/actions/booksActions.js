
import axios from 'axios';
import {GET_BOOKS_URL} from '../../config';
/* ACTION CREATORS */

export function booksHaveError(bool) {
    return {
        type: 'BOOKS_HAVE_ERROR',
        hasError: bool
    };
}
  
export function booksAreLoading(bool) {
    return {
        type: 'BOOKS_ARE_LOADING',
        isLoading: bool
    };
}
  
export function booksFetchDataSuccess(books) {
    return {
        type: 'BOOKS_FETCH_DATA_SUCCESS',
        books
    };
}
  
  
  /* ACTIONS */
  
  export function booksFetchData() {
    return (dispatch) => {
        dispatch(booksAreLoading(true));
  
        axios.get(GET_BOOKS_URL)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
  
                dispatch(booksAreLoading(false));
  
                return response;
            })
            .then((response) => dispatch(booksFetchDataSuccess(response.data)))
            .catch(() => dispatch(booksHaveError(true)));
    };
  }

