import * as actionTypes from '../actions/list-item-action-types.jsx';
import { updateObject } from '../utility.jsx';
import { access } from 'fs';

const defaultState = {
    blogItems: [{
        index: Math.floor(1000 + Math.random() * 9000),
        name: 'Default Text',
        type: 'rich-text-editor',
        data: '<p>Default Text</p>'
    }]
};

const addListItem = (state, action) => {
    return updateObject(state, { blogItems: state.blogItems.concat(action.payload) });
};

const deleteListItem = (state, action) => {
    const updatedArray = state.blogItems.filter((item, i) => item.index !== action.index);
    return updateObject(state, { blogItems: updatedArray });
};

const saveListItem = (state, action) => {
    const updatedArray = state.blogItems.map(item => {
        if (item.index === action.index) {
            item.data = action.data;
        }
        return item;
    });
    return updateObject(state, { blogItems: updatedArray });
};

const blogListItemsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.ADD_LIST_ITEM:
            return addListItem(state, action);
        case actionTypes.DELETE_LIST_ITEM:
            return deleteListItem(state, action);
        case actionTypes.SAVE_LIST_ITEM:
            return saveListItem(state, action);
        default:
            return state;
    }
};

export default blogListItemsReducer;