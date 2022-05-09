import {  useState } from "react";
import {useNavigate} from "react-router-dom";

const SearchPokemon =()=>{

const [search, setSearch] = useState("") //ojo un espacio cambia la ruta



const searchName = useNavigate()



/**search pokemons in search */
const handleChange = e =>{
    setSearch(e.target.value);
}

/** */

return (
    <>
        <input 
                type="search" 
                value={search} 
                className="form-control rounded" 
                placeholder="Search you pikachu..."  
                aria-label="Search" 
                aria-describedby="search-addon"
                onChange={handleChange}
         />
        <button type="button" className="btn btn-outline-primary"  onClick={ ()=>searchName((`/pokedex/${search}/`))}>search</button> 
    </>
)


//
}
export default SearchPokemon