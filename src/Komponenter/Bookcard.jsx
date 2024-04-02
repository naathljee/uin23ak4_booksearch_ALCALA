import Booktitle from "./Booktitle"
import Bookyear from "./Bookyear"
import Bookby from "./Bookby"
import Bookrate from "./Bookrate"
import Amazon from "./Amazon"


export default function Bookcard({bName, bPublish, bAuthor, bRate, bURL}){
    return (
        <article>
            <ul>
            <li>
           <h1><Booktitle title={bName}/></h1>
            <Bookyear year={bPublish}/>
            <Bookby author={bAuthor}/>
            <Bookrate rating ={bRate} />
            <Amazon amazonLink ={bURL}/>
            </li>
            </ul>
        </article>
    )
    
}