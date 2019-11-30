import React, { Component } from 'react';

class BlogListItem extends Component {
    constructor(props) {
        super(props);
        const { id } = this.props;
        console.log(id);
    }

    render() {
        const { value, onClickSave, onClickDelete } = this.props;
        return (
            <div className="blog-list-item">
                <div className="blog-list-item-element">
                    <p>Hello Component {value}</p>
                </div>
                <div className="blog-list-item-controls">
                    <button className="blog-list-item-controls__button-save btn" onClick={onClickSave}>Save</button>
                    <button className="blog-list-item-controls__button-delete btn" onClick={onClickDelete}>Delete</button>
                </div>
            </div>
        );
    }



}

export default BlogListItem;