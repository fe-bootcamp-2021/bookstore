import axios from 'axios';

export function requestGetBooks() {
    return axios.request({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/posts'
    })
}