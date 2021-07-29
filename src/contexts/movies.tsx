import React from 'react';
import IMovie from '../types/IMovie';

type MoviesContextType = {
  movies: IMovie[];
  setMovies: (movies: IMovie[]) => void;
  selectedMovie: IMovie | undefined | null;
  setSelectedMovie: (movie: IMovie | null) => void;
};

export const MoviesContext = React.createContext<MoviesContextType>(undefined!);
export const useMoviesContext = () => React.useContext(MoviesContext);

export const MoviesContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [movies, setMovies] = React.useState<IMovie[]>([]);
  const [selectedMovie, setSelectedMovie] = React.useState<IMovie | null>();
  return (
    <MoviesContext.Provider
      value={{
        movies,
        setMovies,
        selectedMovie,
        setSelectedMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
