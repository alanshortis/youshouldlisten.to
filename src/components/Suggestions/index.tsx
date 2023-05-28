export const Suggestions = ({ suggestions }) => (
  <>
    {suggestions.similarartists.artist.map(similar => (
      <>
        <p>{similar.name}</p>
        <p>Match {similar.match}</p>
      </>
    ))}
  </>
);
