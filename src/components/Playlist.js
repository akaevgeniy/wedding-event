import { Container } from 'react-bootstrap';

function Playlist() {
  return (
    <Container className="mt-3 p-0 d-flex flex-column align-items-center justify-content-center">
      <h3 style={{ color: 'white' }} className="title mb-1">
      ПЛЕЙЛИСТ НА СТИЛЕ
      </h3>
      <p style={{ color: 'white' }} className="subtitle me-3 ms-3 border-top border-white pt-1">
        {`Мы собрали специальный тематический плейлист, чтобы вы окунулись в атмосферу уже сейчас. Да, он тоже специфический ;)`}
      </p>
      <iframe
        frameborder="0"
        style={{'border':'none','width':'100%','height':'400px'}}
        width="100%"
        height="350"
        src="https://music.yandex.ru/iframe/#playlist/akaevgeniy/1008"
      >
        Слушайте{' '}
        <a href="https://music.yandex.ru/users/akaevgeniy/playlists/1008">
         Be like Peaky Blinders
        </a>{' '}
        — <a href="https://music.yandex.ru/users/akaevgeniy">akaevgeniy</a> на
        Яндекс Музыке
      </iframe>
    </Container>
  );
}

export default Playlist;
