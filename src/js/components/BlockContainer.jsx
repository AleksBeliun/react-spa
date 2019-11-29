import React, { Component } from 'react';
import ReactDom from 'react-dom';

class BlockContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            me: 'be'
        };
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    click(event) {
        console.log(event.target);
        alert("Hello again");
    }

    render() {
        const { me } = this.state;
        return (
            <div>
                <input
                    className="form-control"
                    defaultValue={me}
                    onChange={this.handleChange}
                />
                <a href="#" className="me" onClick={this.click}>Click me</a>
            </div>
        );
    }
}

let click = (event) => {
    console.log(event.target);
    alert("Hello again there");
};


export default BlockContainer;