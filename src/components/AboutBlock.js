import { Container, Image } from 'react-bootstrap';
import shelbys from '../assets/shelbys.jpg';
import lady from '../assets/gatsbyvintage.jpg';

function AboutBlock() {
  return (
    <Container className='mt-3 p-2 pb-0 pt-0'>
    <Container className="p-2 d-flex flex-column align-items-center justify-content-center">
      <h3 style={{ color: 'white' }} className="title text-center border-bottom border-white pb-1">
        {`СВАДЬБА В БРИТАНСКОМ СТИЛЕ 20-Х ГОДОВ`}
      </h3>
      <p style={{ color: 'white' }} className="mb-2 subtitle">
        {`Привет! Мы решили провести тематическую свадьбу, просим тебя поддержать нас в этом :)`}
      </p>
      <p style={{ color: 'white' }} className="mb-2 subtitle">
        {`Дресс-код предполагает классический британский стиль 20-х годов, преимущественно гангстерского толка. Ориентиры: сериал «Острые козырьки», стиль «Гэтсби».`}
      </p>
      <p style={{ color: 'white' }} className="mb-2 subtitle">
        {`Мужчинам хорошо подойдут классические костюмы тройки, белые рубашки, жилетки, подтяжки. Обязательным атрибутом гангстера является кепка восьмиклинка. Вот эталоны для вдохновения:`}
      </p>
      <Image alt='Братья Шелби' style={{ maxWidth: '100%' }} src={shelbys} />
      <p style={{ color: 'white' }} className="mt-2 mb-2 subtitle">
        {`Дам будем рады видеть в вечерних платьях наших оттенков (главное пожелание - однотонная ткань без рисунков). Пример женского образа:`}
      </p>
      <Image alt='Gatsby style' style={{ maxWidth: '100%' }} src={lady} />
      <p style={{ color: 'white' }} className="mb-2 subtitle">
        {`Чем больше атрибутов будет на вас, тем атмосферней будет наше торжество. Это могут быть кепки, бабочки, галстуки, шаль, отделка бахромой и перьями, сумочки, мандштук, автомат Томпсона (шутка :), хотя, почему нет?).`}
      </p>
      <p style={{ color: 'white' }} className="mb-0 pb-2 subtitle">
        {`Дайте волю фантазии! :)`}
      </p>
      <p style={{ color: 'white' }} className="mb-0 pb-2 subtitle">
        {`Давайте представим, что это будет не просто свадьба, а гангстерская сходка :)`}
      </p>
      <p style={{ color: 'white' }} className="mb-0 pb-2 subtitle">
        {`By order of the Peaky Blinders`}
      </p>
    </Container>
    </Container>
  );
}

export default AboutBlock;
