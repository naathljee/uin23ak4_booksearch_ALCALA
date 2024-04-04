import React from 'react';
import Bookcard from './Bookcard';

//funksjon som legger til fitrering for søksresultat av titlter
function Home({ books, filterText}){
const filterBooks = filterText
  ? books.filter(book =>
      book.title.toLowerCase().includes(filterText.toLowerCase())
    
    )
    : books;
  
  return (
    
    <div className="book-list">
      
      {filterBooks.map((book,index)=>(
        <Bookcard key={index} book={book}/>

      ))}
      
    </div>
  );
}

export default Home;
