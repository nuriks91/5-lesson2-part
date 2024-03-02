import { configureStore } from "@reduxjs/toolkit";
import bookListReducer from "./slices/BookListSlice";
import cartReducer from "./slices/CartSlices";


const rootReducer = {
    bookList: bookListReducer,
    cart: cartReducer
};

const store = configureStore({ reducer: rootReducer });

export default store;