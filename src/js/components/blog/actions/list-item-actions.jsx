export function addBlogItemList(payload) {
    return { type: 'ADD_LIST_ITEM', payload: payload.blogItems.concat(action.payload) };
}

export function deleteBlogItemList(payload) {
    return { type: 'DELETE_LIST_ITEM', payload: payload.index };
}

export function saveBlogItemList(payload) {
    return { type: 'SAVE_LIST_ITEM', payload: payload.blogItem };
}