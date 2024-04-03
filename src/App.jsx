import { useState, useEffect } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
//import {booksApi} from '../src/assets/booksApi.json'
import Bookcard from './Komponenter/Bookcard'
import Knapp from './Komponenter/Searchresult'
import Visning from './Komponenter/Visning'
import Home from './Komponenter/Home'


function App() {
  const [searchText, setSearchText] = useState('')
  const [books, setBooks] = useState([])


  const hentAPI= async()=>{
    try{
      const response = await fetch(`https://openlibrary.org/search.json?q=james+bond`);

      const data = await response.json();

      console.log("hei", data)
      setBooks(data.docs);
  } catch (error){
    console.error('Feil innheting av data app.jxs', error)
  }}

  useEffect(() =>{
    hentAPI()
  }, [])


  return (
  <Routes>
    <Route element={<Visning/>}/>
      <Route element ={<Home/>}/>
      <Route path=':slug' element={Bookcard}/>
      </Routes> 
      )
  }

  export default App