import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import HeaderPokedex from '../components/HeaderPokedex'
import getPokemonByid from '../services/getPokemonByid'


import { useNavigate } from 'react-router-dom'



import './css/pokemon.css'

const Pokemon=()=>{
    const [ImagePokemon, setImagePokemon] = useState('');
    const [NamePokemon, setNamePokemon] = useState('');
    const [WeightPokemon, setWeightPokemon] = useState('');
    const [HeightPokemon, setHeightPokemon] = useState('');
    const [IdPokemon, setIdPokemon]= useState("");
    const [TypePokemon, setTypePokemon] = useState([])
    const [AbilitiesPokemon, setAbilitiesPokemon] = useState([])
    const [statPokemon, setStatPokemon] = useState([])
    const [movePokemon, setMovePokemon] = useState([])

    const {id} = useParams()
    
    useEffect(()=>{
        if(id){
            getPokemonByid(id)
        .then((res)=>{
            setNamePokemon(res.data.name);
            setImagePokemon(res.data.sprites.other.home.front_default);
            setWeightPokemon(res.data.weight)
            setHeightPokemon(res.data.height)
            setIdPokemon(res.data.id)
            setTypePokemon(res.data.types)
            setAbilitiesPokemon(res.data.abilities)
            setStatPokemon(res.data.stats)
            setMovePokemon(res.data.moves)
         
        })

        }
    },[id]);






/** /---------------------return -------------------/ */
    const navigate = useNavigate()
    const back = () =>{
        navigate(('/pokedex/'))

    }
/** /---------------------return -------------------/ */








    return(
        <section className="pokemon" >
{/*start heard headerPokedes */}
            <div className="homePageLogout">
               <HeaderPokedex />      
            </div>
{/*end heard headerPokedes */}
            
            <div className="pokemonDescription"> 
                <header className="pokemonDescriptionHeader">
{/*start return back */}                   
                    <div className="return">
                        <button onClick={back}> 
                          <i className="fi fi-rr-angle-double-left"></i>
                        </button>
                    </div>
{/*end return back */}        
                    <div className="pokemonDescriptionHeaderName">
                        <h1 className="letterTitle">{NamePokemon}</h1>                    
                    </div>
                </header>


                <div className="pokemonDescriptionTarjetFirst Tarjet">
                    <div className="pokemonDescriptionTarjetFirstContent">
                        <div className="pokemonDescriptionTarjetFirstContentImg">
                            <img src={ImagePokemon} alt='' />
                        </div>
                        <div className="pokemonDescriptionTarjetFirstContentMeasures">
                            <div className="pokemonDescriptionTarjetFirstContentMeasuresWheight">
                                <div>
                                  Weight  
                                </div>
                                <div>
                                {WeightPokemon} 
                                </div>
                            </div>
                            <div className="pokemonDescriptionTarjetFirstContentMeasuresHeigth">
                                <div>
                                  Height  
                                </div>
                                <div>
                                  {HeightPokemon}  
                                </div>
                            </div>
                            
                        </div>
                        <div className='line'></div>
                        <div className="pokemonDescriptionTarjetFistContentId">
                                <div>#</div>
                                <div>{IdPokemon}</div>
                        </div>
                    </div>
                </div>

              
                <div className="pokemonDescriptionTarjetSecond Tarjet"> 
                    <div className="pokemonDescriptionTarjetSecondType">
                        <h1>Type</h1>
                        <div className="pokemonDescriptionTarjetSecondTypeItems">
                            {TypePokemon.map(type => (
                                <div key={type.slot} >
                                    {type.type.name}
                                </div>
                            ))
                            }
                        </div>
                        
                    </div>
                </div>


                <div className='pokemonDescriptionTarjetThree Tarjet'>
                         <h1>Abilities</h1>
                        <div className="pokemonDescriptionTarjetSecondTypeItems">
                            {AbilitiesPokemon.map(type => (
                                <div key={type.slot} >
                                    {type.ability.name}
                                </div>
                            ))
                            }
                        </div>
                </div>



                <div className='pokemonDescriptionTarjetFour Tarjet'>
                         <h1>Abilities</h1>
                        <div className="pokemonDescriptionTarjetFourTypeItems">
                            {statPokemon.map(types => (
                                <div key={types.stat.name} className="tar" >
                                   <div>
                                        {types.stat.name}
                                   </div>
                                   <div>
                                       {types.base_stat}%
                                   </div>
                                   
                                    
                                </div>
                            ))
                            }
                        </div>
                </div>



                <div className='pokemonDescriptionTarjetFive Tarjet'>
                         <h1>Movimients</h1>
                        <div className="pokemonDescriptionTarjetFiveTypeItems">
                            {movePokemon.map(types => (
                                <div key={types.move.name} className="tar" >
                                   <div>
                                        {types.move.name}
                                   </div>    
                                </div>
                            ))
                            }
                        </div>
                </div>
                
                




            </div>
            
        </section>
    )


}
export default Pokemon