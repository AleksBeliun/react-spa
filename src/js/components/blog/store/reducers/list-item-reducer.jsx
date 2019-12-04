import * as actionTypes from '../actions/list-item-action-types.jsx';
import { updateObject } from '../utility.jsx';

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
            return updateObject(state, { blogItems: state.blogItems.concat(action.payload) });
        case actionTypes.DELETE_LIST_ITEM:
            const updatedArray = state.blogItems.filter((item, i) => item.index !== action.index);
            return updateObject(state, { blogItems: updatedArray });
        case actionTypes.SAVE_LIST_ITEM:
            const updatedArray2 = state.blogItems.map(item => {
                if (item.index === action.index) {
                    item.data = action.data;
                }
                return item;
            });
            return updateObject(state, { blogItems: updatedArray2 });
        default:
            return state;
    }
};

export default blogListItemsReducer;