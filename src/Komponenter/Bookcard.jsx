import { Link } from "react-router-dom";

export default function Bookcard({book}){
    
    if(!book){
        return null;
    }
const {title, first_publish_year, author_name, ratings_average, cover_i} =book;
//i linjen over har vi alle variablene som matcher apiet
//her har jeg måttet brukt chatGpt for å hjelpe meg å strukturere amazon linken, da jeg ikke fikk til selv, å printe ut bilder. for å være eksakt
//Bortsett fra det, så lagde jeg en html struktur i return av hvordan bokvisning skulle være, metoden jeg har valgt ligner veldig på template literals. 
const amazonBilde = cover_i
? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
: "null";
const amazon_id= `https://www.amazon.com/s?k=${encodeURIComponent(book.title + " book")}`;
    return (
        <article className="Bokvisning">
           <h2> {title} </h2>
           <img id= "img" src={amazonBilde}/>
           <p id="author"> Forfatter: {author_name}</p>
            <p id="publish"> Utgivelses år: {first_publish_year}</p>
            <p id="rate"> Rating : {ratings_average} </p>
            <a id="Amazonlink"href={amazon_id}target="_blank">Kjøp her!</a>
        
        </article>
    )
    
}