import { useState, useEffect } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
//import {booksApi} from '../src/assets/booksApi.json'
import Bookcard from './Komponenter/Bookcard'
import Knapp from './Komponenter/Knapp'


function App() {
  const [books, setBooks] = useState([])

  const hentAPI= async()=>{
      const response = await fetch(`https://openlibrary.org/search.json?q=james+bond`);

      const data = await response.json();

      console.log("hei", data)
  }

  useEffect(() =>{
    hentAPI()
  }, [])


  return (<>
  </>
  )
}

export default App
