import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Categories from './Komponenter/Categories'
import Main from './Komponenter/Main'

import { booksApi } from './assets/booksApi'


function App() {
  console.log(booksApi)


  return (
    <>
    <h1>James Bond Book Search</h1>
    </>
  )
}

export default App
