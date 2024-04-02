import { useState, useEffect } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
//import {booksApi} from '../src/assets/booksApi.json'
import Bookcard from './Komponenter/Bookcard'
import Knapp from './Komponenter/Knapp'
import Visning from './Komponenter/Visning'
import Home from './Komponenter/Home'


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


  return (
  <Routes>
    <Route element={<Visning/>}/>
      <Route element ={<Home/>}/>
      <Route path=':slug' element={Bookcard}/>
ertyuio0p+
´¨_
7