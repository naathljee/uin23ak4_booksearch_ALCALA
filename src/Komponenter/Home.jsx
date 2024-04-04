import React from 'react';
import Bookcard from './Bookcard';

//funksjon som legger til fitrering for søksresultat av titlter slik at når en søk foretas blir resultatet gitt ut ifra tittel feltet. her måtte jeg ha hjelp av chatgpt og google for å løse linje8, da jeg prøvde først med if-tester uten hell. 
function Home({ books, filterText}){
const filterBooks = filterText
  ? books.filter(book =>
      book.title.toLowerCase().includes(filterText.toLowerCase())
    
    )
    : books;
  // i return lagde jeg en map som går gjennom hver eneste bok og lager en bookcard komponent.
  return (
    
    <div className="book-list">
      
      {filterBooks.map((book,index)=>(
        <Bookcard key={index} book={book}/>

      ))}
      
    </div>
  );
}

export default Home;
