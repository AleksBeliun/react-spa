import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import configureStore from './components/blog/store/store.jsx';

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

const store = createStore(blogListItemsReducer, applyMiddleware(logger));

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