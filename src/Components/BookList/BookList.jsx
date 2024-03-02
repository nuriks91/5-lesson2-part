import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchAllBooks from '../store/reducers/bookListCreator';

const BookList = () => {
    const { books, booksError, booksStatus} = useSelector((state) => state.bookList);
    const dispatch = useDispatch();
    const onAddToCart = {id} => dispatch(addItemToCart(id))

    useEffect(() => {
        dispatch(fetchAllBooks())
    },[]);
    const booksCases = {
        pending: 'loading...'
        fulfilled: books?.map((book) => <bookListItem key={book.id} addToCar={(id) => console.log(id)} book={book} />),
        rejected: booksError,
    };
  return (
    <div>{booksCases[booksStatus]}</div>
  )
}

export default BookList