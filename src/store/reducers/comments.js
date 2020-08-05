import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    comments:[] 
};

const setComments = ( state, action ) => {
    return updateObject( state, {
        comments: action.comments
    } );
};

const fetchCommentsFailed = ( state, action ) => {
    return;
};

const addFavComments= ( state, action ) =>{
    console.log(action.id);
    const commentid=state.comments.findIndex(item=>item.id === action.id)
    const coms=[...state.comments];
    coms[commentid].fav=true;
    return updateObject(state,coms);
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_COMMENTS: return setComments(state, action);    
        case actionTypes.FETCH_COMMENTS_FAILED: return fetchCommentsFailed(state, action);
        case actionTypes.ADD_FAV_COMMENTS: return addFavComments(state,action);
        default: return state;
    }
};

export default reducer;