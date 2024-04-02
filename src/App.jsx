import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import { booksApi } from './assets/booksApi'
import Bookcard from './Komponenter/Bookcard'


function App() {
  console.log(booksApi)


  return (
  <>
  <div className='App'>
    {booksApi.map((book) =>
    <Bookcard key={book.docs} bName={book.title} bAuthor={book.author_name} bPublish={book.publish_year} bRate={book.ratings_count} />

    
    
    )}
    
    
    
  </div>
  </>  )
}

export default App
