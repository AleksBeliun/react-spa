import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import blogListItemsReducer from './components/blog/store/reducers/list-item-reducer.jsx';

import BlogList from "./components/blog/blog-list.jsx";


const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] Dispatching', action);
            const result = next(action);
            console.log('[Middleware] Next State ', store.getState());
            return result;
        };
    };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(blogListItemsReducer, composeEnhancers(applyMiddleware(logger, thunk)));

class App extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="container" >
                <BlogList />
            </div>
        );
    }
}


export default App;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Provider store={store}><App /></Provider>, wrapper) : false;