import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    users:[] 
};

const setUsers = ( state, action ) => {
    return updateObject( state, {
        users: action.users
    } );
};

const fetchUsersFailed = ( state, action ) => {
    return;
};

const addFavUsers= ( state, action ) =>{
    console.log(action.id);
    const usersid=state.users.findIndex(item=>item.id === action.id)
    const urs=[...state.users];
    urs[usersid].fav=true;
    return updateObject(state,urs);
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_USERS: return setUsers(state, action);    
        case actionTypes.FETCH_USERS_FAILED: return fetchUsersFailed(state, action);
        case actionTypes.ADD_FAV_USERS: return addFavUsers(state,action);
        default: return state;
    }
};

export default reducer;