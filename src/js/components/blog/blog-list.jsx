import React, { Component } from 'react';

import BlogListItem from './blog-list-item.jsx';

class BlogList extends Component {
    state = {
        blogItems: [<BlogListItem />, <BlogListItem />, <BlogListItem />]
    };
    render() {
        return (
            <div className="blog-list">
                {this.state.blogItems.map(blogItem => (
                    // <li key={blogItem} >
                    //     {blogItem}
                    // </li>
                    <BlogListItem key={blogItem.key} />
                ))}
            </div>
        );
    }
}

export default BlogList;