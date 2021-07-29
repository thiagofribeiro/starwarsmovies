import React from 'react';
import IMovie from '../types/IMovie';

type MoviesContextType = {
  movies: IMovie[] | undefined;
  setMovies: (movies: IMovie[]) => void;
};

export const MoviesContext = React.createContext<MoviesContextType>(undefined!);
export const useAppData = () => React.useContext(MoviesContext);

export const MoviesContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [movies, setMovies] = React.useState<IMovie[]>([]);
  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>{children}</MoviesContext.Provider>
  );
};
