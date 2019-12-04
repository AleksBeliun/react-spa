import * as actionTypes from './list-item-action-types.jsx';

export const addListItem = (payload) => {
    return {
        type: actionTypes.ADD_LIST_ITEM,
        payload
    };
};

export const deleteListItem = (index) => {
    return {
        type: actionTypes.DELETE_LIST_ITEM,
        index: index
    };
};

export const saveListItem = (data, index) => {
    return {
        type: actionTypes.SAVE_LIST_ITEM,
        data: data,
        index: index
    };
};

export const saveListItemAsync = (data, index) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveListItem(data, index))
        }, 2000);
    };
};