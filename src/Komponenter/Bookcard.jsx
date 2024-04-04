export default function Bookcard({book}){

    if(!book){
        return null;
    }
const {title, first_publish_year, author_name, ratings_average, amazon_id} =book;

    return (
        <article className="Bokvisning">
           <h3> Title: {title} </h3>
            <p> Year: {first_publish_year}</p>
            <p> Author: {author_name}</p>
            <p>Rating : {ratings_average} </p>
            {amazon_id && (
                <a href={`https://www.amazon.com/s?k=${amazon_id}`}> Amazon Link </a>
            )}
        </article>
    )
    
}