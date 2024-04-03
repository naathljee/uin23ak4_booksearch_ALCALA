import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home'

function Visning({ children }) {
  return (
    <div className="visning">
      <header>
        <h1>James Bond's Books</h1>
        <nav>
            <ul>
            </ul>
        </nav>
      </header>
      <main>
        {children}
    
      </main>
      <footer>
        <p>&copy;Oblig 4 - Nathalie Alcala </p>
      </footer>
    </div>
  );
}

export default Visning;