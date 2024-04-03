import React from 'react';

function Visning({ children }) {
  return (
    <div className="visning">
      <header>
        <h1>James Bond's Books</h1>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <p>&copy;James Bond's Books </p>
      </footer>
    </div>
  );
}

export default Layout;