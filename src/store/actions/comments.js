import * as actionTypes from './actionTypes';
import axios from 'axios';

export const FETCH_COMMENTS = ( comments ) => {
    return {
        type: actionTypes.FETCH_COMMENTS,
        comments: comments
    };
};

export const FETCH_COMMENTS_FAILED = (error) => {
    return {
        type: actionTypes.FETCH_COMMENTS_FAILED
    };
};

export const initComments= () => {
    return dispatch => {
        axios.get( 'https://jsonplaceholder.typicode.com/comments' )
            .then( response => {
                const fetchedComments = [];
                for ( let key in response.data ) {
                    fetchedComments.push( {
                        ...response.data[key],
                        id: key,
                        fav:false
                    } );
                }
                //console.log(fetchedComments)
               dispatch(FETCH_COMMENTS(fetchedComments));
            } )
            .catch( error => {
                dispatch(FETCH_COMMENTS_FAILED(error));
            } );
    };
};

export const addCommentsToFavs=(id)=>{
    return{
        type:actionTypes.ADD_FAV_COMMENTS,
        id:id
    };
};