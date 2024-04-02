import { useParams } from 'react-router-dom'

export default function Home (){
        const {slug} = useParams ()
        return <h1>{slug}</h1>
        
    }