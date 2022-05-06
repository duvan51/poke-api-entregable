import axios from 'axios'


const getPokemonByTypURL = async (url)=>{

    const req = await axios.get(url);
    return req

    
}
export default getPokemonByTypURL