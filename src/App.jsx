import React, { useState, useEffect } from 'react';
import './App.css';
import Bookcard from './Komponenter/Bookcard';
import Searchresult from './Komponenter/Searchresult';
import Visning from './Komponenter/Visning';

function App() {
  const [books, setBooks] = useState([]);

  const hentAPI = async () => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=james+bond`);
      const data = await response.json();
      console.log("hei", data);
      setBooks(data.docs);
    } catch (error) {
      console.error('Feil innhenting av data i App.jsx', error);
    }
  };

  useEffect(() => {
    hentAPI();
  }, []);

  return (
    <div className="App">
      <Visning books={books} setBooks={setBooks} />
    </div>
  );
}

export default App;
