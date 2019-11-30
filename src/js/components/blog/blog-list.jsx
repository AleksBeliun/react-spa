import React, { Component } from 'react';

import BlogListItem from './blog-list-item.jsx';

class BlogList extends Component {
    // state = {
    //     blogItems: [<BlogListItem />, <BlogListItem />, <BlogListItem />]
    // };

    constructor(props) {
        super(props);
        this.state = {
            blogItems: [<BlogListItem />, <BlogListItem />, <BlogListItem />]
        };
    }

    // const [blogItems, setBlogItems] = useState();

    render() {
        return (
            <div className="blog-list">
                {this.state.blogItems.map((blogItem, index) => (
                    <BlogListItem
                        key={index}
                        id={index}
                        value={index}
                        blogItem={blogItem}
                        onClickDelete={(e) => this.clickDelete(e, index)}
                        onClickSave={(e) => this.clickSave(e, index, blogItem)}
                    />
                ))}
            </div>
        );
    }

    clickSave = (event, id, blogItem) => {
        alert('Saved ' + id);
        // this.state.blogItems[id] = this;
        this.setState({
            blogItems: 
            this.state.blogItems[id] = blogItem
        });
        console.log(this.state.blogItems);

    }

    clickDelete(event, id) {
        alert('Deleted ' + id);
        // this.state.blogItems = this.state.blogItems.filter(item=> item.id !== id);
        // if(id > -1) {
        //     this.state.blogItems.splice(id, 1);
        // }
        this.setState({
            blogItems:
                this.state.blogItems.splice(id, 1)
        });

        console.log(this.state.blogItems);

    }
}

export default BlogList;