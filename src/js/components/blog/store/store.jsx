import { createStore } from 'redux';
import blogListItemsReducer from '../reducers/list-item-reducer.jsx';

function configureStore(state = { blogItems: [] }) {
    return createStore(blogListItemsReducer, state);
};

export default configureStore;