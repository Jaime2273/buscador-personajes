import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function CharacterCard({ character }) {
  // Usamos el contexto para cambiar el color de la tarjeta según el tema
  const { theme } = useContext(ThemeContext);
  
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    width: '200px',
    textAlign: 'center',
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
  };

  return (
    <div style={cardStyle}>
      <img 
        src={character.image} 
        alt={character.name} 
        style={{ width: '100%', borderRadius: '50%' }} 
      />
      <h3>{character.name}</h3>
      <p><strong>Estado:</strong> {character.status}</p>
      <p><strong>Especie:</strong> {character.species}</p>
    </div>
  );
}

export default CharacterCard;