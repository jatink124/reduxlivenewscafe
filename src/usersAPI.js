import axios from "axios";

const api = axios.create({
    baseURL: 'https://www.livenewscafe.xyz/',
});

export const getUsers = () => api.get('/php-react-post-list/all-users.php').then(response => response.data);

export const getUser = (id) => 
api.get(`/users/${id}`).then((response) => response.data);

export const updateUser = ({id, ...updatedUser}) =>
api.put(`/users/${id}`, updatedUser).then((response) => response.data);