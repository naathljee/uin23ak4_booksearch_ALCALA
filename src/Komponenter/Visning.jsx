import React, { useState } from 'react';
import Home from './Home';
import Searchresult from './Searchresult';

//useStaten min passer på at søkeresultatet starter som null
function Visning({ books }) {
  const [searchResult, setSearchResult] = useState(null);
//fetcher Api-et
  const handleSearch = async (searchText) => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${searchText}`);
      const data = await response.json();
      setSearchResult(data.docs);
    } catch (error) {
      console.error('Henting av data feilet', error);
    }
  };
// i return har jeg laget mer eller mindre en HTML layout av nettsiden der jeg har brukt props fra Searchresult og home slik at de rendres ut
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
        <p>Oblig 4 - Nathalie Alcalá</p>
      </footer>
    </div>
  );
}

export default Visning;
