import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import postReducer from './store/reducers/posts';
import commentReducer from './store/reducers/comments';
import albumReducer from './store/reducers/albums';
import userReducer from './store/reducers/users';
import 'semantic-ui-css/semantic.min.css';

const rootReducer = combineReducers({
    post: postReducer,
    comment: commentReducer,
    album:albumReducer,
    user:userReducer
});
const store=createStore(rootReducer,
    applyMiddleware(thunk)
);

const app = (
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
    
);

ReactDOM.render(app,document.getElementById( 'root' ) );
registerServiceWorker();
