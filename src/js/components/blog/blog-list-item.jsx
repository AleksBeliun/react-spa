import React, { Component } from 'react';

class BlogListItem extends Component {
    constructor(props) {
        super(props);
        const { id, blogItem } = this.props;
        let { value } = this.props;
        console.log('BlogListItem ID: ', id);
        console.log('BlogListItem value: ', value);
        console.log('BlogListItem : ', blogItem);
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