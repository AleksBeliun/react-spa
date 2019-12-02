import React, { Component, useState } from 'react';

import BlogListItem from './blog-list-item.jsx';
import BlogItemPanel from './blog-item-panel.jsx';

import fs from 'fs';
// class BlogList extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             // blogItems: [<BlogListItem />, <BlogListItem />, <BlogListItem />],
//             blogItems: []
//         };
//     }

//     render() {
//         return (
//             <>
//                 <BlogItemPanel onClickAdd={(e) => this.clickAdd(e)} />
//                 {this.state.blogItems.length > 0 ? <div className="blog-list">
//                     {this.state.blogItems.map((blogItem, index) => (
//                         <BlogListItem
//                             key={index}
//                             id={index}
//                             value={index + 1}
//                             blogItem={blogItem}
//                             onClickDelete={(e) => this.clickDelete(e, index)}
//                             onClickSave={(e) => this.clickSave(e, index, blogItem)}
//                         />
//                     ))}
//                 </div> : <div>No Items in the list</div>}
//             </>
//         );
//     }

//     clickAdd = (event) => {
//         console.log('Added');
//         this.setState(state => {
//             const list = state.blogItems.push(<BlogListItem />);
//             return list;
//         });
//         console.log(this.state.blogItems);
//     }

//     clickSave = (event, id, blogItem) => {
//         console.log('Saved ' + id);

//         // this.setState(prevState => ({
//         //     blogItems: {
//         //         ...prevState.blogItems,
//         //         [prevState.blogItems[id]]: blogItem
//         //     }
//         // }));

//         // this.counter();
//         // console.log(this.state.counter);

//         // this.setState(
//         //     this.state.blogItems[id] = blogItem
//         // );

//         this.setState(state => {
//             const list = state.blogItems.map(item => item[id] = blogItem);
//             return list;
//         });


//         // this.setState({
//         //     blogItems: [...this.state.blogItems,]
//         // });
//         console.log(this.state.blogItems);

//     }

//     clickDelete(event, id) {
//         console.log('Deleted ' + id);

//         if (id > -1) {
//             this.setState(state => {
//                 const list = state.blogItems.splice(id, 1);
//                 return list;
//             });
//         }

//         console.log(this.state.blogItems);

//     }
// }

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

export default BlogList;