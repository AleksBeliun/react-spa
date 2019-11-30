import React, { Component } from 'react';

import BlogListItem from './blog-list-item.jsx';
import BlogItemPanel from './blog-item-panel.jsx';

class BlogList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // blogItems: [<BlogListItem />, <BlogListItem />, <BlogListItem />],
            blogItems: []
        };
    }

    render() {
        return (
            <>
                <BlogItemPanel onClickAdd={(e) => this.clickAdd(e)} />
                {this.state.blogItems.length > 0 ? <div className="blog-list">
                    {this.state.blogItems.map((blogItem, index) => (
                        <BlogListItem
                            key={index}
                            id={index}
                            value={index + 1}
                            blogItem={blogItem}
                            onClickDelete={(e) => this.clickDelete(e, index)}
                            onClickSave={(e) => this.clickSave(e, index, blogItem)}
                        />
                    ))}
                </div> : <div>No Items in the list</div>}
            </>
        );
    }

    clickAdd = (event) => {
        console.log('Added');

        
    }

    clickSave = (event, id, blogItem) => {
        console.log('Saved ' + id);

        // this.setState(prevState => ({
        //     blogItems: {
        //         ...prevState.blogItems,
        //         [prevState.blogItems[id]]: blogItem
        //     }
        // }));

        // this.counter();
        // console.log(this.state.counter);

        this.setState(
            this.state.blogItems[id] = blogItem
        );


        // this.setState({
        //     blogItems: [...this.state.blogItems,]
        // });
        console.log(this.state.blogItems);

    }

    clickDelete(event, id) {
        console.log('Deleted ' + id);
        // this.state.blogItems = this.state.blogItems.filter(item=> item.id !== id);
        // if(id > -1) {
        //     this.state.blogItems.splice(id, 1);
        // }

        // const temp = Object.assign({}, this.state.blogItems);
        // const removed = this.state.blogItems.filter(x => {
        //     console.log(x);
        //     return x[id] != id;
        // });
        // console.log('removed: ', removed);
        this.setState(state => ({
            blogItems: state.blogItems.filter(item => {
                console.log(item);
                item.id != id;
            })
        }));

        // this.setState({
        //     blogItems: temp

        // });


        console.log(this.state.blogItems);

    }
}

export default BlogList;