import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import BlogListItem from './blog-list-item.jsx';
import BlogItemPanel from './blog-item-panel.jsx';

import * as actionTypes from './store/actions/list-item-actions.jsx';

function BlogList(props) {
    // const [blogItems, setBlogItems] = useState([
    //     { name: 'Default Name', type: 'rich-text-editor', state: "<p>Default Text</p>" }
    // ]);


    // const saveListItemState = (data, index) => {
    //     setBlogItems(blogItems.map((item, i) => {
    //         // console.log(`Item ${i}`, item);
    //         i !== index ? null : item.state = data;
    //         return item;
    //     }));
    //     // const tempItems = blogItems.map(item => item);
    //     // for (let i = 0; i < tempItems.length; i++) {
    //     //     if (i === index) {
    //     //         console.log('callback item: ', tempItems[i]);
    //     //         tempItems[i].state = data;
    //     //         setBlogItems(tempItems.map(item => item));
    //     //     }
    //     // }
    //     // console.log('callback: ', blogItems);
    // };

    const clickCheckState = (event) => {
        console.log('Current blog items: ', props);
    };

    // const clickSave = (event, index, blogItem) => {
    //     console.log('Saved ' + index);

    //     setBlogItems(blogItems.map((item, i) => {
    //         // console.log(`Item ${i}`, item);
    //         i !== index ? null : item.state = blogItem.state;
    //         return item;
    //     }));
    //     console.log(blogItem);

    // };

    return (
        <>
            <BlogItemPanel onClickAdd={props.onClickAdd} onClickCheckState={(e) => clickCheckState(e)} />
            {props.blogItems.length > 0 ? <div className="blog-list">
                {props.blogItems.map((blogItem, index) => (
                    <BlogListItem
                        key={index}
                        index={index}
                        blogItem={blogItem}
                        saveListItemState={(e) => props.onClickSave(blogItem.index, blogItem)}
                        onClickDelete={(e) => props.onClickDelete(blogItem.index)}
                        onClickSave={(e) => props.onClickSave(blogItem.index, blogItem)}
                    />
                ))}
            </div> : <div>No Items in the list</div>}
        </>
    );
}

// const mapStateToProps = state => {
//     return { blogItems: state.blogItems };

// };

const mapStateToProps = state => {
    return {
        blogItems: state.blogItems
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onClickAdd: () => dispatch({ type: actionTypes.ADD_LIST_ITEM, payload: { name: 'Rich Text Editor', type: 'rich-text-editor', data: 'Default Txt', index: Math.floor(1000 + Math.random() * 9000) } }),
        onClickSave: (index, blogItem) => dispatch({ type: actionTypes.SAVE_LIST_ITEM, payload: { index: index, blogItem: blogItem } }),
        onClickDelete: (index) => dispatch({ type: actionTypes.DELETE_LIST_ITEM, payload: { index: index } })
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(BlogList);
