import React, { Component } from "react";
import ReactDOM from "react-dom";

import FormContainer from "./components/FormContainer.jsx";
import BlockContainer from "./components/BlockContainer.jsx";

class App extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div class="container" >
                <div class="row mt-5">
                    <div class="col-md-4 offset-md-1">
                        <p>Create a new article</p>
                        <div id="create-article-form">
                            <FormContainer />
                        </div>
                    </div>

                    <div id="block-container">
                        <BlockContainer />
                    </div>
                </div>
            </div>
        );
    }
}


export default App;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;