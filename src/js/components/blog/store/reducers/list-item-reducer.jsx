import * as actionTypes from '../actions/list-item-action-types.jsx';

const defaultState = {
    blogItems: [{
        index: Math.floor(1000 + Math.random() * 9000),
        name: 'Default Text',
        type: 'rich-text-editor',
        data: '<p>Default Text</p>'
    }]
};

const blogListItemsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.ADD_LIST_ITEM:
            return Object.assign({}, state, {
                ...state,
                blogItems: state.blogItems.concat(action.payload)
            });
        case actionTypes.DELETE_LIST_ITEM:
            return Object.assign({}, state, {
                ...state,
                blogItems: state.blogItems.filter((item, i) => item.index !== action.index)
            });
        case actionTypes.SAVE_LIST_ITEM:
            return Object.assign({}, state, {
                ...state,
                blogItems: state.blogItems.map(item => {
                    if (item.index === action.index) {
                        item.data = action.data;
                    }
                    return item;
                })
                // blogItems: state.blogItems.map(item => item.index === action.payload.index ? item.data = action.payload.blogItemData : item)
            });
        default:
            return state;
    }
};

export default blogListItemsReducer;