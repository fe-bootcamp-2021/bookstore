import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { firebase } from '../../initFirebase';

import { getBooks, deletingBook, addingBook } from '../../redux/ducks/booksSlice';

import styles from './AdminPage.module.css';

const db = firebase.database()

const AdminPage = (props) => {

    const books = useSelector(state => state.books)
    console.log('books adminPage', books)
    const dispatch = useDispatch()
    // const history = useHistory()

    const title = useRef('')
    const writer = useRef('')
    const yearPublished = useRef('')
    const genre = useRef('')
    const count = useRef('')
    const isbn = useRef('')

    useEffect(() => {
        dispatch(getBooks())
    }, [])

    

    const addBookHandler = (e) => {
        e.preventDefault()
        const newBook = {
            title: title.current.value,
            writer: writer.current.value,
            yearPublished: yearPublished.current.value,
            genre: genre.current.value,
            count: count.current.value,
            isbn: isbn.current.value
        }
        dispatch(addingBook(newBook))
        title.current.value = ''
        writer.current.value = ''
        yearPublished.current.value = ''
        genre.current.value = ''
        count.current.value = 0
        isbn.current.value = 0

        title.current.focus()
    }

    // const changeBookCountHandler = (id, type) => {
    //     const book = books.find(book => book.id === id)
    //     if (type === 'minus') {
    //         if (book.count === 0) {
    //             return
    //         }
    //         dispatch(updatingBook(book.count - 1))
    //     }
    //     if (type === 'plus') {
    //         dispatch(updatingBook(book.count + 1))
    //     }
    // }


    return (
        <>
        <h1 style={{width: '30%', margin: 'auto', textAlign: 'center', marginBottom: '10px'}} >Admin Page</h1>
        <div className={styles.AdminPage}>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <div className={styles.formDiv} >
                    <form>
                        <p style={{fontWeight: 'bold'}} >Add new book</p>
                        <label >title</label>
                        <input ref={ title } />
                        <label >writer</label>
                        <input ref={ writer } />
                        <label >year published</label>
                        <input ref={ yearPublished } />
                        <label >genre</label>
                        <input type='text' ref={ genre } />
                        <label >count</label>
                        <input type='number' min={0} defaultValue={0} ref={ count } />
                        <label >ISBN</label>
                        <input type='number' min='0' ref={ isbn } />
                        <label >image</label>
                        <input type='file' />
                        <button 
                            style={{display: 'block', margin: 'auto', marginTop: '10px'}} 
                            onClick={(e) => addBookHandler(e)}
                        
                        >add</button>
                    </form>
                </div>
            </div>
        </div>
        <div className={styles.TableDiv} >
            <table>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th style={{width: '20%'}} >count</th>
                    <th>actions</th>
                </tr>
                {
                    books.map(book => {
                        return (
                            <tr key={book.id} >
                                <td style={{width: '20%'}} >{book.id}</td>
                                <td>{book.title}</td>
                                <td>
                                    <div style={{display: 'flex', justifyContent: 'space-evenly', margin: 'auto' }}>
                                        <p style={{margin: '0', width: '30%'}} >{book.count}</p>
                                        <input style={{width: '20%'}} type='number' min='0' />
                                        <button>save</button>
                                    </div>
                                    </td>
                                <td>
                                    <button
                                        onClick={() => dispatch(deletingBook(book.id))}
                                    >delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
        </>
    )
}

export default AdminPage;