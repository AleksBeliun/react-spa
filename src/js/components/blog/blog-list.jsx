import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import BlogListItem from './blog-list-item.jsx';
import BlogItemPanel from './blog-item-panel.jsx';

import * as actionCreators from './store/actions/list-item-actions.jsx';

function BlogList(props) {

    const clickCheckState = (event) => {
        console.log('Current blog items: ', props);
    };

    const handleDataSave = (blogItemData, blogItemIndex) => {
        console.log('blogItemData: ', blogItemData);
        console.log('blogItemIndex: ', blogItemIndex);
        props.onClickSave(blogItemData, blogItemIndex);
    };

    const handleDataDelete = (index) => {
        props.onClickDelete(index);
    };

    return (
        <>
            <BlogItemPanel onClickAdd={props.onClickAdd} onClickCheckState={(e) => clickCheckState(e)} />
            {props.blogItems.length > 0 ? <div className="blog-list">
                {props.blogItems.map((blogItem, index) => (
                    <BlogListItem
                        key={index}
                        index={blogItem.index}
                        blogItem={blogItem}
                        saveListItemState={handleDataSave}
                        onClickDelete={() => props.onClickDelete(blogItem.index)}
                        onClickSave={handleDataSave}
                    />
                ))}
            </div> : <div>No Items in the list</div>}
        </>
    );
}

const mapStateToProps = state => {
    return {
        blogItems: state.blogItems
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // onClickAdd: () => dispatch({ type: actionTypes.ADD_LIST_ITEM, payload: { name: 'Rich Text Editor', type: 'rich-text-editor', data: '<p>Default Text</p>', index: Math.floor(1000 + Math.random() * 9000) } }),
        // onClickSave: (blogItemData, index) => dispatch({ type: actionTypes.SAVE_LIST_ITEM, payload: { index: index, blogItemData: blogItemData } }),
        onClickAdd: () => dispatch(actionCreators.addListItem({ name: 'Rich Text Editor', type: 'rich-text-editor', data: '<p>Default Text</p>', index: Math.floor(1000 + Math.random() * 9000) })),
        onClickSave: (blogItemData, index) => dispatch(actionCreators.saveListItem(blogItemData, index)),
        onClickDelete: (index) => dispatch(actionCreators.deleteListItem(index))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(BlogList);
