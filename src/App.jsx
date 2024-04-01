import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Categories from './Komponenter/Categories'
import Bookcard from './Komponenter/Bookcard'
import Main from './Komponenter/Main'
import Searchresults from './Komponenter/Searchresults'

import { booksApi } from './assets/booksApi'


function App() {
  console.log(booksApi)


  return (
    <>
    <h1>HEI</h1>
    </>
  )
}

export default App
