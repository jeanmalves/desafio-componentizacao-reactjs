import { MovieProps } from "../App";
import { MovieCard } from "./MovieCard";

interface GenreProps {
  title: string;
}

interface MoviesByGenreProps {
  movies: MovieProps[];
  selectedGenre: GenreProps;
}

export function Content(props: MoviesByGenreProps) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {props.selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {props.movies.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  );
}