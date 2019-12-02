import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import configureStore from './components/blog/store/store.jsx';

import blogListItemsReducer from './components/blog/reducers/list-item-reducer.jsx';

import BlogList from "./components/blog/blog-list.jsx";

const store = createStore(blogListItemsReducer);

class App extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Provider store={store}>
                <div className="container" >
                    <BlogList />
                </div>
            </Provider>
        );
    }
}


export default App;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;