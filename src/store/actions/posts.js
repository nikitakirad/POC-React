import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setPosts = ( posts ) => {
    return {
        type: actionTypes.SET_POSTS,
        posts: posts
    };
};

export const fetchPostsFailed = (error) => {
    return {
        type: actionTypes.FETCH_POSTS_FAILED
    };
};

export const initPosts= () => {
    return dispatch => {
        axios.get( 'https://jsonplaceholder.typicode.com/posts' )
            .then( response => {
                const fetchedPosts = [];
                for ( let key in response.data ) {
                    fetchedPosts.push( {
                        ...response.data[key],
                        id: key,
                        fav:false
                    } );
                }
               dispatch(setPosts(fetchedPosts));
            } )
            .catch( error => {
                dispatch(fetchPostsFailed(error));
            } );
    };
};


export const addFav=(id)=>{
    return{
        type:actionTypes.ADD_FAV,
        id:id
    };
};