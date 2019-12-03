import * as actionTypes from '../actions/list-item-actions.jsx';

const defaultState = {
    blogItems: [{
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
                // blogItems: state.blogItems.concat(action.payload)
            });
        case actionTypes.DELETE_LIST_ITEM:
            return Object.assign({}, state, {
                ...state,
                blogItems: state.blogItems.filter((item, i) => i !== action.payload.index)
                // blogItems: state.blogItems.filter((item, i) => i != action.payload.index)
            });
        case actionTypes.SAVE_LIST_ITEM:
            return Object.assign({}, state, {
                ...state,
                blogItems: state.blogItems.map((item, i) => i !== action.payload.index ? null : item.data = action.payload.data)
                // blogItems: state.blogItems.map((item, i) => {
                //     i !== action.index ? null : item.state = action.payload.state;
                //     return item;
                // })
            });
        default:
            return state;
    }
};

export default blogListItemsReducer;