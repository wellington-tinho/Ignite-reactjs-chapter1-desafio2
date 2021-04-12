
import { Button } from "./Button";

import '../styles/sidebar.scss';
import '../styles/button.scss';

interface SidebarProps{
  handleClickButton: Function;
  genres: Array<GenreResponseProps>;
  selectedGenreId: number;
}

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar(props: SideBarProps) {
  const { genres, handleClickButton, selectedGenreId } = props;
  return(
      <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}
  