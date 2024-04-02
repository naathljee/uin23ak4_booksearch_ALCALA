import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import { booksApi } from './assets/booksApi'
import Bookcard from './Komponenter/bookcard'

function App() {
  console.log(booksApi)


  return (
  <>
  <div className='app'>
    {booksApi.map((book) =>
    <Bookcard key={book.docs} bName={book.title} bAuthor={book.author_name} />

    
    
    )}
    
    
    
  </div>
  </>  )
}

export default App
