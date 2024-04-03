import { useState } from "react";
import { Await } from "react-router-dom";
import Bookcard from "./Bookcard";

export default function Searchresult({}){
    const [searchText, setSearchText] = useState("");
    const [Searchresult, setSearchResult] = useState (null);

    const fetchTitle = async (searchText) => {
        try {
            const response = await fetch ()
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

        if(searchText.length >=3){
            try{
                const text = await fetchTitle(searchText);
                setData(text);
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
        {setData.map((book, index) => (
                    <Bookcard key={index} book={book} />))}
    </div>
    </div>
    )
}