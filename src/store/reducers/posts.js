import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    posts:[] 
};

const setPosts = ( state, action ) => {
    return updateObject( state, {
        posts: action.posts
    } );
};

const fetchPostsFailed = ( state, action ) => {
    return;
};

const addFav= ( state, action ) =>{
    const postid=state.posts.findIndex(item=>item.id === action.id)
    const p=[...state.posts];
    p[postid].fav=true;
    return updateObject(state,p);
   
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_POSTS: return setPosts(state, action);    
        case actionTypes.FETCH_POSTS_FAILED: return fetchPostsFailed(state, action);
        case actionTypes.ADD_FAV: return addFav(state,action);
        default: return state;
    }
};

export default reducer;