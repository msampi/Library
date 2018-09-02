
export function booksHaveError(state = false, action) {
  switch (action.type) {
      case 'BOOKS_HAVE_ERROR':
          return action.hasError;
      default:
          return state;
  }
}

export function booksAreLoading(state = false, action) {
  switch (action.type) {
      case 'BOOKS_ARE_LOADING':
          return action.isLoading;
      default:
          return state;
  }
}

export function books(state = [], action) {
  switch (action.type) {
      case 'BOOKS_FETCH_DATA_SUCCESS':
          return action.books;
      default:
          return state;
  }
}
