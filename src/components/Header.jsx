import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function Header({ setSearchTerm }) {
  // Consumimos el contexto global
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header style={{ marginBottom: '20px', textAlign: 'center' }}>
      <h1>Buscador de Rick & Morty</h1>
      
      <input 
        type="text" 
        placeholder="Busca un personaje..." 
        onChange={handleSearch}
        style={{ padding: '8px', fontSize: '16px', marginRight: '10px' }}
      />
      
      <button onClick={toggleTheme} style={{ padding: '8px 16px', cursor: 'pointer', width: '220px'}}>
        Cambiar a Tema {theme === 'light' ? 'Oscuro' : 'Claro'}
      </button>
    </header>
  );
}

export default Header;