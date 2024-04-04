import { useState } from "react";
import Bookcard from "./Bookcard";
// jeg bruker useStates for å definere søket (søket resultat og søktekst)
export default function Searchresult(){
    const [searchText, setSearchText] = useState('')
    const [searchResult, setSearchResult] = useState (null);
//jeg fetcher api-data basert på teksten og legger til en error i konsollen om jeg ikke klarer å fetche data
    const fetchTitle = async (searchText) => {
        try {
            const response = await fetch (`https://openlibrary.org/search.json?q=${searchText}`)
            const data = await response.json();
            setSearchResult(data.docs);
        } catch (error) {
            console.error('Henting av data feilet', error)
        }
    };
        //oppdattering av tekst når søkefeltet brukes
    const searchChange = (event) =>{
        setSearchText(event.target.value)

    };
    // her laget jeg en funskjon som passer på hva som blir sendt til søk, samt så legger jeg til en if test for å påse at teksten som søkes har minst 3 tegn. om ikke så sender funksjonen en alert
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
        //under finner vi min søkefelt og søkeknapp. dette har jeg laget ved bruk av form og button
        // under der igjen mapper jeg ut hvordan layouten på søkresultatet mitt skal se ut
   <div>
    <form id="sk_felt" onSubmit={searchInnsending}>
        <input
        id="text_felt"
        type="text"
        placeholder="Søk her"
        value={searchText}
        onChange={searchChange}
        />
        <button type="submit">Søk her</button>
    </form>
    
    <div>
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
