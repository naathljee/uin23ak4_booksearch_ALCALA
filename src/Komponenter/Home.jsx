import React from 'react';
import Bookcard from './Bookcard';

function Home({ books }) 
  { console.log(books, "home")
    if (!books || books.length === 0) {
      return <div>Ingen bøker tilgjengelig</div>;
    }

  return (
    
    <div className="book-list">
      
      <h2>Alle bøker</h2>
      <ul>
      {books.map((book,index) =>(
        <Bookcard key={index}
        book={{
          title:book.title,
          first_publish_year: book.first_publish_year,
          author_name: book.author_name,
          ratings_average:book.ratings_average,
          amazon_id:book.amazon_id
        }}
        />
      ))}
      </ul>
    </div>
  );
}

export default Home;