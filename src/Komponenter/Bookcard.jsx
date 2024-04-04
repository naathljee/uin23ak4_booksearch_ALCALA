import { Link } from "react-router-dom";

export default function Bookcard({book}){

    if(!book){
        return null;
    }
const {title, first_publish_year, author_name, ratings_average, cover_i} =book;

const amazonBilde = cover_i
? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
: "null";
const amazon_id= `https://www.amazon.com/s?k=${encodeURIComponent(book.title + " book")}`;
    return (
        <article className="Bokvisning">
           <h2> {title} </h2>
           <img id= "img" src={amazonBilde}/>
            <p id="publish"> Utgivelses år: {first_publish_year}</p>
            <p id="author"> Forfatter: {author_name}</p>
            <p id="rate"> Rating : {ratings_average} </p>
            <a id="Amazonlink"href={amazon_id}target="_blank">Kjøp her!</a>
        
        </article>
    )
    
}