import React, { Component } from 'react';
import ReactDom from 'react-dom';

class BlockContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            me: ''
        };
        // this.handleChange = this.handleChange.bind(this);

    }

    // click = (event) => {
    //     console.log(event.target);
    //     alert("Hello again");
    // }

    render() {
        const { me } = this.state;
        return (
            <div>
                <input
                    className="form-control"
                    defaultValue={me}
                // onChange={this.handleChange}
                />
                <a href="#" className="me" onClick={click}>Click me</a>
            </div>
        );
    }
}

let click = (event) => {
    console.log(event.target);
    alert("Hello again there");
};


export default BlockContainer;

// const wrapper = document.getElementById("block-container");
// wrapper ? ReactDom.render(<BlockContainer />, wrapper) : false;