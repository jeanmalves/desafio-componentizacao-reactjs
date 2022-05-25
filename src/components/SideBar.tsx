import { GenreResponseProps } from "../App";
import { Button } from "./Button";

interface GenresProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  onSelectGenre: (id: number) => void;
}

export function SideBar(props: GenresProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.onSelectGenre(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>

  );
}