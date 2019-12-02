import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import BlogListItem from './blog-list-item.jsx';
import BlogItemPanel from './blog-item-panel.jsx';

import { ADD_LIST_ITEM } from './actions/list-item-actions.jsx';

function BlogList(props) {
    const blogItem = {
        name: '',
        type: '',
        state: ''
    };

    const [blogItems, setBlogItems] = useState([
        { name: 'Default Name', type: 'rich-text-editor', state: "<p>Default Text</p>" }
    ]);


    const saveListItemState = (data, index) => {
        setBlogItems(blogItems.map((item, i) => {
            // console.log(`Item ${i}`, item);
            i !== index ? null : item.state = data;
            return item;
        }));
        // const tempItems = blogItems.map(item => item);
        // for (let i = 0; i < tempItems.length; i++) {
        //     if (i === index) {
        //         console.log('callback item: ', tempItems[i]);
        //         tempItems[i].state = data;
        //         setBlogItems(tempItems.map(item => item));
        //     }
        // }
        // console.log('callback: ', blogItems);
    };

    const clickAdd = (event) => {
        console.log('Added new Blog Item');

        setBlogItems(blogItems.concat({ name: 'Rich Text Editor', type: 'rich-text-editor', state: "" }));
        // useDispatch({type: });
    };

    const clickCheckState = (event) => {
        console.log('Current blog items: ', blogItems);
    };

    const clickSave = (event, index, blogItem) => {
        console.log('Saved ' + index);

        setBlogItems(blogItems.map((item, i) => {
            // console.log(`Item ${i}`, item);
            i !== index ? null : item.state = blogItem.state;
            return item;
        }));
        console.log(blogItem);

    };

    const clickDelete = (event, index) => {
        console.log('Deleted ' + index);

        setBlogItems(blogItems.filter((item, i) => i !== index));

    };

    return (
        <>
            <BlogItemPanel onClickAdd={(e) => clickAdd(e)} onClickCheckState={(e) => clickCheckState(e)} />
            {blogItems.length > 0 ? <div className="blog-list">
                {blogItems.map((blogItem, index) => (
                    <BlogListItem
                        key={index}
                        index={index}
                        blogItem={blogItem}
                        saveListItemState={saveListItemState}
                        onClickDelete={(e) => clickDelete(e, index)}
                        onClickSave={(e) => clickSave(e, index, blogItem)}
                    />
                ))}
            </div> : <div>No Items in the list</div>}
        </>
    );
}

// const mapStateToProps = state => {
//     return { blogItems: state.blogItems };

// };

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => {
    return {
        onClickAdd: () => dispatch({type: 'ADD_LIST_ITEM', payload: { name: 'Rich Text Editor', type: 'rich-text-editor', state: "" }}),
        onClickSave: () => dispatch(),
        onClickDelete: () => dispatch()
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(BlogList);
