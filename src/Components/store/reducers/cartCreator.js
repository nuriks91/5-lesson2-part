import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchAllBooks from "./bookListCreator";

const addItemToCart = createAsyncThunk('Cart/addItem', async (payload, thunkApi) => {
    try {
      const responce = await api.getCart()
        return responce.data
    }catch (err) {
        return thunkApi.rejectWithValue('Failed to fetch.Please try afaun')
    }
})

export const addToCart = createAsyncThunk('Cart/addItem', async (payload, thunkApi) => {
    try{
        const {books} = thunkApi.getState().bookList
        const {cart} = thunkApi.getState().cart
        const book = books.find(({id}) => === payload)
        const item = cart.find(({id}) => === payload)


    }catch (err) {
        return thunkApi.rejectWithValue('smt has gone wrong')
    }
})

export default fetchAllCart