import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../../redux/ducks/booksSlice";

const HomePage = (props) => {
    const dispatch = useDispatch()
    const books = useSelector(state => state.books)
    console.log('from homepage', books)

    return (
        <>
            <h3>
                HomePage
            </h3>
            <button onClick={() => dispatch(getBooks())} >fetch books</button>
            {
                books.map(book => {
                    return (
                        <div key={book.id} style={{width: '300px', border: '1px solid black'}}>
                            <p>{book.title}</p>
                            <p>{book.body}</p>
                        </div>
                    )
                })
            }
        </>

    )
}

export default HomePage;