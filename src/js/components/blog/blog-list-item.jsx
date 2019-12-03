import React, { Component } from 'react';

import RichTextEditor from './elements/rich-text-editor.jsx';

class BlogListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { index, blogItem, onClickSave, onClickDelete, saveListItemState } = this.props;
        return (
            <div className="blog-list-item">
                <div className="blog-list-item-element">
                    {blogItem.type === 'rich-text-editor' ?
                        <RichTextEditor
                            index={index}
                            name={blogItem.name}
                            data={blogItem.data}
                            saveListItemState={saveListItemState} /> : <p>Nothing to see here</p>}
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