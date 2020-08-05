import * as actionTypes from './actionTypes';
import axios from 'axios';

export const FETCH_ALBUMS = ( albums ) => {
    return {
        type: actionTypes.FETCH_ALBUMS,
        albums: albums
    };
};

export const FETCH_ALBUMS_FAILED = (error) => {
    return {
        type: actionTypes.FETCH_ALBUMS_FAILED
    };
};

export const initAlbums= () => {
    return dispatch => {
        axios.get( 'https://jsonplaceholder.typicode.com/albums' )
            .then( response => {
                const fetchedAlbums = [];
                for ( let key in response.data ) {
                    fetchedAlbums.push( {
                        ...response.data[key],
                        id: key,
                        fav:false
                    } );
                }
                //console.log(fetchedAlbums)
               dispatch(FETCH_ALBUMS(fetchedAlbums));
            } )
            .catch( error => {
                dispatch(FETCH_ALBUMS_FAILED(error));
            } );
    };
};

export const addAlbumsToFavs=(id)=>{
    return{
        type:actionTypes.ADD_FAV_ALBUMS,
        id:id
    };
};