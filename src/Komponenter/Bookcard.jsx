import { Route,Routes } from 'react-router-dom'
import Booktitle from "./Booktitle"
import Bookyear from "./Bookyear"
import Bookby from "./Bookby"
import Bookrate from "./Bookrate"
import Amazon from "./Amazon"



export default function Bookcard({book}){
    if(!book){
        return null;
    }
const {title, first_publish_year, author_name, average_rating, amzon_id} =book;

    return (
        <article>
           <Booktitle title={title}/>
            <Bookyear year={first_publish_year}/>
            <Bookby author={author_name}/>
            <Bookrate rating ={average_rating} />
            <Amazon amazonLink ={`https://www.amazon.com/s?k=${amazon_id}`}/>
        </article>
    )
    
}