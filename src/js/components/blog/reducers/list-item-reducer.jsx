const defaultState = {
    blogItems: [{
        name: 'Default Text',
        type: 'rich-text-editor',
        data: '<p>Default Text</p>'
    }]
};

const blogListItemsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_LIST_ITEM':
            return Object.assign({}, state, {
                blogItems: state.blogItems.concat(action.payload)
            });
        case 'DELETE_LIST_ITEM':
            return Object.assign({}, state, {
                blogItems: state.blogItems.filter((item, i) => i != action.payload.index)
            });
        case 'SAVE_LIST_ITEM':
            return Object.assign({}, state, {
                blogItems: state.blogItems.map((item, i) => {
                    i !== action.index ? null : item.state = action.payload.state;
                    return item;
                })
            });
        default:
            return state;
    }
};

export default blogListItemsReducer;