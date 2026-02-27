import CharacterCard from './CharacterCard';

function CharacterList({ characters }) {
  if (characters.length === 0) {
    return <p style={{ textAlign: 'center' }}>No se encontraron personajes.</p>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      {characters.map((char) => (
        // Requisito: Enviar datos de un componente padre a un hijo mediante props
        <CharacterCard key={char.id} character={char} />
      ))}
    </div>
  );
}

export default CharacterList;