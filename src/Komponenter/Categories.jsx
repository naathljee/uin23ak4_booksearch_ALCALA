export default function Categories (){
    const Kategorier = ["title","publish_year","publish_place", "lenguage"]
    return(
        <>
        <h1>Kategorier</h1>
        <ul>
        {Kategorier.map((kategori, index) => <li key={kategori+index}><Link to={category}>{category}</Link> </li>)}
        </ul>
        </>
    )
}