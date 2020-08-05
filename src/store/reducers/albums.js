import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    albums:[] 
};

const setAlbums = ( state, action ) => {
    return updateObject( state, {
        albums: action.albums
    } );
};

const fetchAlbumsFailed = ( state, action ) => {
    return;
};

const addFavAlbums= ( state, action ) =>{
    console.log(action.id);
    const albumsid=state.albums.findIndex(item=>item.id === action.id)
    const albs=[...state.albums];
    albs[albumsid].fav=true;
    return updateObject(state,albs);
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_ALBUMS: return setAlbums(state, action);    
        case actionTypes.FETCH_ALBUMS_FAILED: return fetchAlbumsFailed(state, action);
        case actionTypes.ADD_FAV_ALBUMS: return addFavAlbums(state,action);
        default: return state;
    }
};

export default reducer;