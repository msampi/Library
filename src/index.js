import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import App from './components/App';
//import registerServiceWorker from './registerServiceWorker';
import rootReducer from './components/admin/reducers/root';
import { BrowserRouter as Router } from 'react-router-dom'


/* REDUX STORE */

let store = createStore(rootReducer,applyMiddleware(thunk,promise));
 
ReactDOM.render(
    <Provider store={ store }>
      <Router>
        <App />
      </Router>
    </Provider> ,
    document.getElementById('root')
  );

//registerServiceWorker();
