import React, { Component } from "react";
import ReactDOM from "react-dom";

import BlogList from "./components/blog/blog-list.jsx";

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
wrapper ? ReactDOM.render(<App />, wrapper) : false;