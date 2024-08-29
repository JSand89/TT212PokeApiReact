import React, {useState , useEffect} from "react"
import { useParams } from "react-router-dom"
import { fetchPokemonDetail } from "../service/pokemonService"

const PokemonDetailPage = ()=>{
    const {name} = useParams()
    const [pokemon,setPokemon] = useState(null)

    useEffect (()=>{
        const getPokemonDetail = async ()=>{
            try {
                const data = await fetchPokemonDetail(name)
                setPokemon(data)
            } catch (error) {
                console.error("error en getPokemonDetail", error)
            }
        }
        getPokemonDetail()
    },[name])
    if (!pokemon){
        return <div>Cargando</div>
    }
    return(
        <>
        <h1>{pokemon.name}</h1>
         <img src={pokemon.sprites.front_default} alt={`imagen de ${pokemon.name}`} />
        <p>Altura: {pokemon.height}</p>
        <p>Peso: {pokemon.weight}</p>
        {console.log(pokemon)}
        </>
    )
}

export default PokemonDetailPage