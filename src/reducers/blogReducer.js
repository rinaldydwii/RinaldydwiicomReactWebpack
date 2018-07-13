import { REQUEST_POSTS, RECEIVE_POSTS, FAILURE_POSTS } from '../actions/blogActions';

let initialState = {
    loading: false,
    posts: [],
    error: ''
};

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_POSTS:
            return {
                ...state,
                loading: true,
            }
        case RECEIVE_POSTS:
            return {
                ...state,
                posts: action.posts,
                loading: false
            }
        case FAILURE_POSTS:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        default:
            return {
                ...state
            }
    }
}

export default blogReducer;