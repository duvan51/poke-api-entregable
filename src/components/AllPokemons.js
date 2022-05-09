import getAllpokemons from "../services/getAllpokemons"
import './css/allpokemons.css'


import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import Loading from "./loading/Loading.js";

const AllPokemons=()=>{
    const [allPokemons, setAllPokemons] = useState([])
    const [loading, setLoading] = useState(false)




    useEffect(()=>{ 
        setLoading(true)
        
        getAllpokemons().then((res)=>{
        setAllPokemons(res.data.results)
        setLoading(false)
        
        })
      
    },[])




    const list = allPokemons.map( (p) => 
    (
            <Link to={`/pokedex/${p.name}`} key={p.url}> 
                <PokemonCard name={p.name} url={p.url} /> 
            </Link>
    ))
    return(
        <>
        {loading && <Loading />}
        <div className="spacing-bottom cards">
             {list}
        </div> 
        </>
    )
}

export default AllPokemons