import React, { Component } from 'react';

import BlogListItem from './blog-list-item.jsx';

class BlogList extends Component {
    render() {
        return (
            <div className="blog_list">
                <BlogListItem />
                <BlogListItem />
                <BlogListItem />
            </div>
        );
    }
}

export default BlogList;