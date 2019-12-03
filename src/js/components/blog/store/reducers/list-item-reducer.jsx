import * as actionTypes from '../actions/list-item-actions.jsx';

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
                blogItems: state.blogItems.filter((item, i) => item.index !== action.payload.index)
            });
        case actionTypes.SAVE_LIST_ITEM:
            return Object.assign({}, state, {
                ...state,
                // blogItems: state.blogItems.map((item, i) => item.id !== action.payload.index ? null : item.data = action.payload.data)
                // blogItems: state.blogItems.map((item, i) => {
                //     i !== action.index ? null : item.data = action.payload.data;
                //     return item;
                // })
                blogItems: state.blogItems.map(item => {
                    console.log('Item: ', item);
                    console.log('actionPayload: ', action.payload.blogItem);
                    if (item.index === action.payload.index) {
                        item.data = action.payload.blogItem.data;
                    }
                    console.log('after payload: ', item);
                })
            });
        default:
            return state;
    }
};

export default blogListItemsReducer;