export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const FAILURE_POSTS = 'FAILURE_POSTS';

function requestPosts(total) {
    return {
        type: REQUEST_POSTS,
        total
    }
}
function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts
    }
}
function failurePosts(error) {
    return {
        type: FAILURE_POSTS,
        error
    }
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export function fetchPosts(total) {
    return dispatch => {
        dispatch(requestPosts(total));
        let url = `https://my-json-server.typicode.com/rinaldydwii/apirinaldydwiicom/blog?_limit=${total}`;
        return fetch(url)
            .then(handleErrors)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(json)))
            .catch(error => dispatch(failurePosts(error)));
    }
}