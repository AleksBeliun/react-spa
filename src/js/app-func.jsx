import React, { Component } from "react";
import ReactDOM from "react-dom";

import FormContainer from "./components/FormContainer.jsx";
import BlockContainer from "./components/BlockContainer.jsx";
import BlogList from "./components/blog/blog-list.jsx";

function App() {
    return (
        <div className="container" >
            {/* <div className="row mt-5">
                <div className="col-md-4 offset-md-1">
                    <p>Create a new article</p>
                    <div id="create-article-form">
                        <FormContainer />
                    </div>
                </div>

                <div id="block-container">
                    <BlockContainer />
                </div>
            </div> */}
            <BlogList />
        </div>
    );
}

export default App;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;