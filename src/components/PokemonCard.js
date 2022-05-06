
import getPokemonbyName from "../services/getAllPokemonbyName";
import { useEffect, useState } from "react";



import './css/pokemoncard.css'

const PokemonCard=({url})=>{

    const [pokemoncardName, setPokemoncardName]=useState(" ")
    const [pokemoncardId, setPokemoncardId]=useState(0)
    const [pokemoncardImage, setPokemoncardImage]=useState(" ")
    const [TypePokemon, setTypePokemon] = useState([])
    const [hpPokemon, sethpPokemon] = useState( "")
    const [AttackPokemon, setAttackPokemon] = useState("")
    const [DefensePokemon, setDefensePokemon] = useState("")
    const [SpeedPokemon, setSpeedPokemon] = useState("")




   // const [names, setName]=({})


    useEffect(()=>{
        if(url){
            getPokemonbyName(url).then((res)=>{
             setPokemoncardName(res.data.name)
             setPokemoncardId(res.data.id)
             setPokemoncardImage(res.data.sprites.other.home.front_default)
             setTypePokemon(res.data.types)
             sethpPokemon(res.data.stats[0].base_stat)
             setAttackPokemon(res.data.stats[1].base_stat)
             setDefensePokemon(res.data.stats[2].base_stat)
             setSpeedPokemon(res.data.stats[5].base_stat)
            })

        }

    },[url])

    return (
        <div> 


                <div className="card" >
                    <div className="cardHeader">
                        <div className="cardHeaderName">
                        {pokemoncardName}
                        </div>
                        <div className="cardHeaderId">
                        {pokemoncardId}
                        </div>
                    </div>
                    <div className="cardMain">
                        <div className="cardMainImg">
                            <img src={pokemoncardImage} alt="" />
                        </div>
                    </div>
                    <div className="cardMainDecription">
                        <div className="cardMainDecriptionTypes"> 
                            types:
                            {TypePokemon.map(type => (
                                    <div key={type.slot} >
                                        {type.type.name}
                                    </div>
                                ))
                            }
                         </div>
                         <div className="cardMainHṕ">
                            hp:
                            {hpPokemon}
                         </div>
                         <div className="cardMainHṕ">
                            Attack:
                            {AttackPokemon}
                         </div>
                         <div className="cardMainHṕ">
                            defense:
                            {DefensePokemon}
                         </div>
                         <div className="cardMainHṕ">
                            speed:
                            {SpeedPokemon}
                         </div>
                    </div>
                </div>
            
     

        </div>
    )
}
export default PokemonCard