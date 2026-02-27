import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import Header from './components/Header';
import CharacterList from './components/CharacterList';

function App() {
  // Requisito: useState (estados para los personajes y la búsqueda)
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Consumimos el contexto para saber si el fondo debe ser oscuro o claro
  const { theme } = useContext(ThemeContext);

  // Requisito: useEffect (Petición fetch a la API externa)
  useEffect(() => {
    // La API de Rick & Morty permite buscar por nombre
    const url = `https://rickandmortyapi.com/api/character/?name=${searchTerm}`;
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          setCharacters(data.results);
        } else {
          setCharacters([]); // Si no hay resultados, vaciamos la lista
        }
      })
      .catch((error) => console.error("Error al buscar personajes:", error));
      
  }, [searchTerm]); // El efecto se ejecuta cada vez que cambia searchTerm

  return (
    <div className={`app-container ${theme}`} style={{ minHeight: '100vh', padding: '20px' }}>
      {/* Requisito: Comunicación por props (pasamos la función para cambiar la búsqueda) */}
      <Header setSearchTerm={setSearchTerm} />
      
      {/* Pasamos los datos obtenidos a la lista */}
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;