import React, { Component } from "react";

class BlogItemPanel extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        const { onClickAdd, onClickCheckState } = this.props;
        return (
            <div className="blog-item-panel" >
                <button
                    className="btn blog-item-panel__button-add"
                    onClick={onClickAdd}
                >Add new blog item</button>
                <button className="btn blog-item-panel__button-check-state"
                    onClick={onClickCheckState}>
                    Check State
                </button>
            </div>
        );
    }
}

export default BlogItemPanel;