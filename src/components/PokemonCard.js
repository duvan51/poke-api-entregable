
import getPokemonbyName from "../services/getAllPokemonbyName";
import { useEffect, useState } from "react";
import Loading from './loading/Loading.js'



import './css/pokemoncard.css'

const PokemonCard=({url})=>{

    const [pokemoncardName, setPokemoncardName]=useState(" ")
    const [pokemoncardId, setPokemoncardId]=useState(0)
    const [pokemoncardImage, setPokemoncardImage]=useState(" ")
    const [TypePokemon, setTypePokemon] = useState([])
    const [hpPokemon, sethpPokemon] = useState("")
    const [AttackPokemon, setAttackPokemon] = useState("")
    const [DefensePokemon, setDefensePokemon] = useState("")
    const [SpeedPokemon, setSpeedPokemon] = useState("")


    /**loading */
    const [loading, setLoading] = useState(false)

   // const [names, setName]=({})


    useEffect(()=>{
        setLoading(true)
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
        setLoading(false)

        }

    },[url])

    return (
        <div > 


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
                            {loading && <Loading />}
                            <img src={pokemoncardImage} alt="" />
                        </div>
                    </div>
                    <div className="cardMainDecription px-4 py-1">
                        <div className="cardMainDecriptionTypes"> 
                            {`types: `}
                            {TypePokemon.map(type => (
                                    <div key={type.slot} >
                                        {type.type.name}
                                    </div>
                                ))
                            }
                         </div>
                         <div className="cardMainHp">
                            <div> HP: </div>
                            {hpPokemon}
                         </div>
                         <div className="cardMainAttack">
                            <div> ATTACK: </div>
                            {AttackPokemon}
                         </div>
                         <div className="cardMainDefense">
                            <div> DEFENSE: </div>
                            {DefensePokemon}
                         </div>
                         <div className="cardMainSpeed">
                            <div> SPEED: </div>
                            {SpeedPokemon}
                         </div>
                    </div>
                </div>
            
     

        </div>
    )
}
export default PokemonCard