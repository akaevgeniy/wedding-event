import { Container } from 'react-bootstrap';

function Map() {
  return (
    <Container className="mt-3 p-2 d-flex flex-column align-items-center justify-content-center">
      <h3 style={{ color: 'white' }} className="title p-2 pb-0 pt-0">
        Торжество состоится по адресу:
      </h3>
      <p style={{ color: 'white', fontSize: '15px' }} className="subtitle p-2 pb-0 pt-0">
        Чувашская Республика, Моргаушский район, деревня Кадикасы, улица
        Пушкина, 33 (Зелёная Усадьба)
      </p>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae8f1d9a44d8699fa686ca954b86abbaf7c84b7ef4182087c332bb05882dc0495&amp;source=constructor"
        width="100%"
        height="300"
        frameborder="0"
      ></iframe>
    </Container>
  );
}

export default Map;
