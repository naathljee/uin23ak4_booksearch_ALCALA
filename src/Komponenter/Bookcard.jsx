import Booktitle from "./Booktitle"
import Bookyear from "./Bookyear"
import Bookby from "./Bookby"
import Bookrate from "./Bookrate"
import Amazon from "./Amazon"


export default function Bookcard(){
    return (
        <article>
            <ul>
            <li>
           <h1><Booktitle/></h1>
            <Bookyear/>
            <Bookby/>
            <Bookrate/>
            <Amazon/>
            </li>
            </ul>
        </article>
    )
    
}