import React, { ReactElement, useEffect, useState } from 'react';
import { useMoviesContext } from '../contexts/movies';

function LastEdition(): ReactElement {
  const { movies } = useMoviesContext();
  const [date, setDate] = useState<Date>();
  useEffect(() => {
    const empiresStrikesBack = movies.filter((movie) => movie.episode_id === 5)[0];

    setDate(new Date(Date.parse(empiresStrikesBack.edited)));
  },
  []);

  return (
    <div>
      Last edition of The Empires Strikes Back:
      {date}
    </div>
  );
}

export default LastEdition;
