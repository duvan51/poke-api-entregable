import {Link} from 'react-router-dom'

const PokemonItem=({pokeObj})=>{
    
    return (
        <Link to = {`/${pokeObj.id}`} >
            <h1> {pokeObj.name}</h1>
        </Link>

    )
}

export default PokemonItem



