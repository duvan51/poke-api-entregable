import axios from 'axios'


const getPokemonbyName = async (url)=>{

    const req = await axios.get(url);
    return req

    
}
export default getPokemonbyName