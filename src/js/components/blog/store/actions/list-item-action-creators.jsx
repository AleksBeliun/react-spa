export const ADD_LIST_ITEM = 'ADD_LIST_ITEM';
export const DELETE_LIST_ITEM = 'DELETE_LIST_ITEM';
export const SAVE_LIST_ITEM = 'SAVE_LIST_ITEM';


export const addListItem = (payload) => {
    return {
        type: ADD_LIST_ITEM,
        payload
    };
};

export const deleteListItem = (index) => {
    return {
        type: DELETE_LIST_ITEM,
        index: index
    };
};

export const saveListItem = (data, index) => {
    return {
        type: SAVE_LIST_ITEM,
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