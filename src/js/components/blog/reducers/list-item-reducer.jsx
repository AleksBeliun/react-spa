const blogListItemsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_LIST_ITEM':
            return Object.assign({}, state, {
                blogItems: state.blogItems.concat(action.payload)
            });
        // return state.concat({
        //     name: 'Rich Text Editor',
        //     type: 'rich-text-editor',
        //     state: ""
        // });
        case 'DELETE_LIST_ITEM':
        // return state.filter((item, i) => i !== index);
        // return Object.assign({}, state, {
        //     blogItems: state.blogItems.filter((item, i) => i != index)
        // });
        case 'SAVE_LIST_ITEM':
        // return state.map((item, i) => {
        //     i !== index ? null : item.state = blogItem.state;
        //     return item;
        // });
        default:
            return state;
    }
};

export default blogListItemsReducer;