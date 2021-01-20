import { CREATE, UPDATE, DELETE, FETCH_ALL, LIKE_POST } from '../constants/actionTypes';
import * as api from '../api';

// Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({type: FETCH_ALL, payload: data})
  } catch(error) {
    console.error(error.message);
  }
}

export const createPost = (post) => async(dispatch) => {
  try {
    const { data } = await api.createPost(post)
    dispatch({ type: CREATE, payload: data })
  } catch (error) {
    console.error(error.message);
  }
}


export const updatePost = (id, postUpdates) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, postUpdates)

    dispatch({ type: UPDATE, payload: data })
  } catch (error) {
    console.error(error.message);
  }
}

export const deletePost = id => async dispatch => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id })
  } catch (error) {
    console.error(error);
  }
}


export const likePost = id => async dispatch => {
  try {
    const { data } = await api.likePost(id)

    dispatch({ type: LIKE_POST, payload: data })
  } catch (error) {
    console.error(error)
  }
}
