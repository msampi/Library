import { combineReducers } from 'redux';
import { books, booksHaveError, booksAreLoading  } from './bookReducer';
import { alert } from './alertReducer';
import { importFile, importHasError, importIsLoading, sellers } from './importReducer';
import { reducer as formReducer } from 'redux-form';
import { auth } from './authReducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth,
  alert,
  books,
  sellers,
  booksHaveError,
  booksAreLoading,
  importFile,
  importHasError,
  importIsLoading
});

export default rootReducer;