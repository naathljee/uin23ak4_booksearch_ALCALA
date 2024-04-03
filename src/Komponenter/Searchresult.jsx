import { useState } from "react";
import { Await } from "react-router-dom";

export default function Knapp({getSearch}){
    const [find, setFind] = useState("");
    const [data, setData] = useState (null);

    const searchChange = (event) =>{
        setSearchText(event.target.value)

    };

    const searchInnsending = async (event) =>{
        event.preventDefault();

        if(searchText.length >=3){
            try{
                const text = await fetchData(searchText);
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
        value={searchChange}
        onChange={searchInnsending}
        />
        <button type="submit">Søk her</button>
    </form>
    <div>
        <h2>Søkeresutater</h2>
    </div>
    </div>
    )
}