import { Suggestions } from '@/components';

interface Params {
  searchParams: {
    artist?: string;
  };
}

interface Suggestions {
  similarartists: {
    artist: [
      {
        name: string;
        match: number;
      }
    ];
    '@attr': {
      artist: string;
    };
  };
}

async function getSuggestions(artist?: string): Promise<Suggestions | undefined> {
  if (!artist) {
    return undefined;
  }

  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${artist}&api_key=${process.env.LASTFM_KEY}&format=json&limit=5&autocorrect=1`
  );

  return res.json();
}

const Home = async ({ searchParams }: Params) => {
  const { artist } = searchParams;
  const suggestions = await getSuggestions(artist);

  return (
    <main>
      {!artist && <p>Give me something to work with</p>}

      <form action="/" method="GET">
        <input defaultValue={artist} type="text" name="artist" />
        <button type="submit">Go</button>
      </form>

      {suggestions && (
        <>
          {suggestions.similarartists.artist.map(similar => (
            <>
              <p>{similar.name}</p>
              <p>Match {similar.match}</p>
            </>
          ))}
        </>
      )}
    </main>
  );
};

export default Home;
