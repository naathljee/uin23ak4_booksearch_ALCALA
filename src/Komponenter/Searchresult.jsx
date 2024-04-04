import { useState } from "react";
import Bookcard from "./Bookcard";

export default function Searchresult(){ 
    
    const [searchText, setSearchText] = useState('')
    const [searchResult, setSearchResult] = useState (null);

    const fetchTitle = async (searchText) => {
        try {
            const response = await fetch (`https://openlibrary.org/search.json?q=${searchText}`)
            const data = await response.json();
            setSearchResult(data.docs);
        } catch (error) {
            console.error('Henting av data feilet', error)
        }
    };

    const searchChange = (event) =>{
        setSearchText(event.target.value)

    };

    const searchInnsending = async (event) =>{
        event.preventDefault();

        if(searchText.length >= 3){
            try{
                 await fetchTitle(searchText);
                
            } catch (error) {
                console.error ('Henting av data failet', error);
            }
        } else {
            alert ('Søket MÅ inneholde minst 3 tegn :)');
        }

    };


    return (
   <div>
    <form onSubmit={searchInnsending}>
        <input
        type="text"
        placeholder="Søk her"
        value={searchText}
        onChange={searchChange}
        />
        <button type="submit">Søk her</button>
    </form>
    <div>
        <h2>Søkeresutater</h2>
        {searchResult && searchResult.map((book, index) => (
                    <Bookcard key={index} book={{
                        title: book.title,
                        first_publish_year: book.first_publish_year,
                        author_name: book.author_name,
                        ratings_average: book.ratings_average,
                        amazon_id: book.amazon_id

                    }} />))}
    </div>
    </div>
    )
}