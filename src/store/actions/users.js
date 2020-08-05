import * as actionTypes from './actionTypes';
import axios from 'axios';

export const FETCH_USERS = ( users ) => {
    return {
        type: actionTypes.FETCH_USERS,
        users: users
    };
};

export const FETCH_USERS_FAILED = (error) => {
    return {
        type: actionTypes.FETCH_USERS_FAILED
    };
};

export const initUsers= () => {
    return dispatch => {
        axios.get( 'https://jsonplaceholder.typicode.com/users' )
            .then( response => {
                const fetchedUsers = [];
                for ( let key in response.data ) {
                    fetchedUsers.push( {
                        ...response.data[key],
                        id: key,
                        fav:false
                    } );
                }
               dispatch(FETCH_USERS(fetchedUsers));
            } )
            .catch( error => {
                dispatch(FETCH_USERS_FAILED(error));
            } );
    };
};

export const addUserToFavs=(id)=>{
    return{
        type:actionTypes.ADD_FAV_USERS,
        id:id
    };
};