import React, { Component, useState } from 'react';

import BlogListItem from './blog-list-item.jsx';
import BlogItemPanel from './blog-item-panel.jsx';

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
    const blogElement = {
        name: '',
        type: ''
    };
    const [blogItems, setBlogItems] = useState([{}, {}, {}]);

    const clickAdd = (event) => {
        console.log('Added');
        // this.setState(state => {
        //     const list = state.blogItems.push(<BlogListItem />);
        //     return list;
        // });
        // setBlogItems({
        //     blogItems: [...blogItems, <BlogListItem />]
        // });
        setBlogItems(blogItems.concat({ name: 'Rich Text Editor', type: 'rich-text-editor' }));
        console.log(blogItems);
    };

    const clickSave = (event, id, blogItem) => {
        console.log('Saved ' + id);

        // this.setState(prevState => ({
        //     blogItems: {
        //         ...prevState.blogItems,
        //         [prevState.blogItems[id]]: blogItem
        //     }
        // }));

        // this.counter();
        // console.log(this.state.counter);

        // this.setState(
        //     this.state.blogItems[id] = blogItem
        // );

        this.setState(state => {
            const list = state.blogItems.map(item => item[id] = blogItem);
            return list;
        });


        // this.setState({
        //     blogItems: [...this.state.blogItems,]
        // });
        console.log(this.state.blogItems);

    };

    const clickDelete = (event, id) => {
        console.log('Deleted ' + id);

        setBlogItems(blogItems.splice(id, 1));

        console.log(blogItems);
    };

    return (
        <>
            <BlogItemPanel onClickAdd={(e) => clickAdd(e)} />
            {blogItems.length > 0 ? <div className="blog-list">
                {blogItems.map((blogItem, index) => (
                    <BlogListItem
                        key={index}
                        id={index}
                        blogElement={blogItem}
                        onClickDelete={(e) => clickDelete(e, index)}
                        onClickSave={(e) => clickSave(e, index, blogItem)}
                    />
                ))}
            </div> : <div>No Items in the list</div>}
        </>
    );
}



export default BlogList;