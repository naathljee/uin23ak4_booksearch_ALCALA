import React, { useState } from 'react';
import Home from './Home';
import Searchresult from './Searchresult';

function Visning({ books }) {
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = async (searchText) => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${searchText}`);
      const data = await response.json();
      setSearchResult(data.docs);
    } catch (error) {
      console.error('Henting av data feilet', error);
    }
  };

  return (
    <div className="visning">
      <header>
        <h1>James Bond Books</h1>
      </header>
      <main>
        <Searchresult setSearchResult={setSearchResult} handleSearch={handleSearch} />
        <Home books={searchResult || books} />
      </main>
      <footer>
        <p>&copy;Oblig 4 - Nathalie Alcala</p>
      </footer>
    </div>
  );
}

export default Visning;
