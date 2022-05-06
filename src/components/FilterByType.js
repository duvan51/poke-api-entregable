import { useEffect, useState } from "react"
import getPokemonByType from "../services/getPokemonType.js"


const FilterByType =()=>{
    
    const [filterByTypes, setfilterByTypes] =useState([]);

    useEffect(()=>{
        getPokemonByType().then((res)=>{
            setfilterByTypes(res.data.results);
        
        })
        },[])

        const filter = filterByTypes.map(h => 
            (
                    <option key={h.url}>
                            {h.name}
                    </option>   
            )
             )


    return (
        <>
            {filter}
        </>

    )



    
}
export default FilterByType