import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { getAllPokes } from "./api/pokemon";
function App() {
  const [pokesList, setPokesList] = useState([]);
  useEffect(() => {
    async function fetchPokes() {
      const pokes = await getAllPokes();
      console.log(pokes);
      setPokesList(pokes?.results);
    }
    fetchPokes();
  }, []);
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 15,
        }}
      >
        {pokesList.map((p) => (
          <a key={p.name} className="poke-card" href={p.url}>
            <img
              src={`https://img.pokemondb.net/artwork/large/${p.name}.jpg`}
              alt={p.name}
              width={50}
              height={50}
              style={{ borderRadius: 3 }}
            />
            <h4>{p.name}</h4>
          </a>
        ))}
      </div>
    </div>
  );
}
export default App;