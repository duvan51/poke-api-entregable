import AllPokemons from "../components/AllPokemons"
import './css/homepages.css'
import FilterByType from "../components/FilterByType"
import SearchPokemon from "../components/SearchPokemon"
import HeaderPokedex from "../components/HeaderPokedex"


const HomePage=()=>{
 
    return (
        <div className="homePage">

{/*start heard headerPokedes */}            
            
            <div className="homePageLogout">
               <HeaderPokedex />      
            </div>

{/*end heard headerPokedes */}

            <div className="homePageDescription">
                <h1 className="">
                    Pokemons
                </h1>
                <div className="s">
                    welcome xxx, here you can find your favorite pokemon
                </div> 
            </div>
{/* start filter------------------- */}
            <div className="homepagelistAllPokemonnByType px-5">  
                <select className="form-select" aria-label="Default select example">
                    <option select="defaultValue" >select Type of Pokemon</option>
                        <FilterByType />    
                </select>
            </div>
{/* end filter----------------------*/

/* start buscador------------------- */}
            <div className="input-group px-5" >
                <SearchPokemon />
            </div>
{/* end buscador------------------- */}
            <div className="homepagelistAllPokemons">
                <AllPokemons />
            </div>
        </div>
    )
}

export default HomePage