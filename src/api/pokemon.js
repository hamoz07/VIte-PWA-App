import axios from "axios";

let url = "https://pokeapi.co/api/v2/pokemon?limit=30";

export const getAllPokes = async () => {
    const {data} = await axios.get(url)
    return data
}
