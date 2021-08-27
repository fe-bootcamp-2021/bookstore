import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory, useParams } from 'react-router-dom';
import { makingOrder } from '../../redux/ducks/ordersSlice';
import { getBooks } from '../../redux/ducks/booksSlice';

import styles from './BookDetailPage.module.css';


const BookDetailPage = (props) => {
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    const books = useSelector(state => state.books)
    const history = useHistory()
    const currentUser = useSelector(state => state.users.currentUser)
    
    const {id}= useParams() 
    // const book = useLocation().state.book
    const book = books.find(book => book.id === id)



    const plusMinusHandler = (type) => {
        let count;
        switch(type) {
            case 'plus':
                count = quantity + 1 < +book.count ? quantity + 1 : +book.count
                return setQuantity(count)
            case 'minus':
                count = quantity - 1 > 1 ? quantity - 1 : 1
                return setQuantity(count)
        }
    }

    const orderingHandler = () => {
        if (!book.count || !currentUser) {
            return
        }
        dispatch(makingOrder({user: currentUser, book, quantity}))
    }

    return (
        book ?
        <div className={styles.BookDetailPage} >
            <h3>title: {book.title}</h3>
            <h3>writer: {book.writer}</h3>
            <h3>yearPublished: {book.yearPublished}</h3>
            <h3>quantity: {book.count}</h3>
            <div style={{height: '30px', display: 'flex', justifyContent: 'space-evenly', marginBottom: '15px'}} >
                <button disabled={!book.count || !currentUser} onClick={() => plusMinusHandler('minus')} >-</button>
                    {quantity}
                <button disabled={!book.count || !currentUser} onClick={() => plusMinusHandler('plus')} >+</button>
            </div>
            <button
                disabled={!currentUser || !book.count} 
                onClick={orderingHandler}
            >{!book.count ? 'out of order' : currentUser ?  'order' : 'please login to order'}</button>
        </div> : <h3>Loading...</h3>
    )
}

export default BookDetailPage;


