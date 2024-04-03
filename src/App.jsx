import { useState, useEffect } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
//import {booksApi} from '../src/assets/booksApi.json'
import Bookcard from './Komponenter/Bookcard'
import Searchresult from './Komponenter/Searchresult'
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
  }, [searchText]);


  return (
  <Routes>
    <Route path='/' element={
    <Visning>
    </Visning>
    }/>
      <Route path='/Home' element={<Home books={books}/>}/>
      <Route path='/search'element ={<Searchresult
        searchText={searchText}
        setSearchText={setSearchText}
        />
      } />
      </Routes> 
      );
  }

  export default App