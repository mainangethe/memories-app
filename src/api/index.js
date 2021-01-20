import axios from 'axios';

const url = 'https://mk-memories-api.herokuapp.com/api/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, postUpdates) => axios.patch(`${url}/${id}`, postUpdates);
export const deletePost = id => axios.delete(`${url}/${id}`);
export const likePost = id => axios.patch(`${url}/${id}/like_post`);
