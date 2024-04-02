import { useState } from "react"

export default function Knapp({setBooks}){
    const [find, setFind] = useState("")

    const searchSubmit = () =>{

    }

    return (<>
    <h1>Books</h1>
    <form onSubmit={searchSubmit}>
        <label> </label>
        <input> </input>
        <input> </input>
    </form>
    
    
    
    </>)
}