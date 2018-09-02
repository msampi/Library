export function importHasError(state = false, action) {
    switch (action.type) {
        case 'IMPORT_HAS_ERROR':
            return action.hasError;
        default:
            return state;
    }
}
  
export function importIsLoading(state = false, action) {
    switch (action.type) {
        case 'IMPORT_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
  
export function importFile(state = [], action) {
    switch (action.type) {
        case 'IMPORT_SUCCESS':
            return action.response;
        default:
            return state;
    }
}

export function sellers(state = [], action) {
    switch (action.type) {
        case 'SELLERS_FETCH_DATA_SUCCESS':
            return action.sellers;
        default:
            return state;
    }
  }