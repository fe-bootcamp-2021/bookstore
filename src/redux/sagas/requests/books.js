import axios from 'axios';

export function requestGetBooks() {
    return axios.request({
        method: 'get',
        url: 'https://bookstore-f3713-default-rtdb.firebaseio.com/books.json'
    })
}

export function requestDeleteBook(id) {
    return axios.request({
        method: 'delete',
        url: `https://bookstore-f3713-default-rtdb.firebaseio.com/books/${id}.json`
    })
}

export function requestAddBook(book) {
    return axios.request({
        method: 'post',
        url: 'https://bookstore-f3713-default-rtdb.firebaseio.com/books.json',
        data: book
    })
}