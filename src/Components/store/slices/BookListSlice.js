import { createSlice } from '@reduxjs/toolkit'
import fetchAllBooks from '../reducers/bookListCreator'

const initialState = {
    books: [],
    booksStatus: 'pending',
    booksError: '',
}

const bookListSlice = createSlice({
    name: 'Booklist',
    initialState,
    reducers: { setBooks: (state, action) => {
            state.books = action.payload
        }
},
extraReducers: (builder) => {
    builder.addCase(fetchAllBooks.pending, (state) => {
        state.booksStatus = 'pending'
        state.booksError = '';
        state.books = [];
    });

    builder.addCase(fetchAllBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.booksStatus = 'fulfilled'
    })

    builder.addCase(fetchAllBooks.rejected, (state,action) => {
        state.booksError = action.payload;
        state.booksStatus = 'rekected';

    });
},   
}); 

const bookListReducer = bookListSlice.reducer;
export const {setBooks} = bookListSlice.actions;
export default bookListReducer;

