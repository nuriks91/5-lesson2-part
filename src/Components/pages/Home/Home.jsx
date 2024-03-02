import React from 'react'
import { BookList } from '../../../Components'

const Home = () => {
  return (
    <main className='container'>
        <BookList />
        <hr />
        <Cart />
    </main>
  )
}

export default Home