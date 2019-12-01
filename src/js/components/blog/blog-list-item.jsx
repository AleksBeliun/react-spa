import React, { Component } from 'react';

import RichTextEditor from './elements/rich-text-editor.jsx';

class BlogListItem extends Component {
    constructor(props) {
        super(props);
        const { id, blogElement } = this.props;
        console.log('BlogListItem ID: ', id);
        console.log('BlogListItem : ', blogElement);
    }

    render() {
        const { blogElement, onClickSave, onClickDelete } = this.props;
        return (
            <div className="blog-list-item">
                <div className="blog-list-item-element">
                    {blogElement.type === 'rich-text-editor' ? <RichTextEditor name={blogElement.name} /> : <p>Nothing to see here</p>}
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