import { Container } from 'react-bootstrap';

function EventBlock() {
  return (
    <Container className="mt-3 d-flex flex-column align-items-center justify-content-center">
      <h3 style={{ color: 'white' }} className="title">
      {`16 ИЮЛЯ 2022 г.`}
      </h3>
      {/* <p
        style={{ color: 'white' }}
        className="mb-0 subtitle"
      >{`16 июля 2022 г. (суббота)`}</p> */}
      <div>
      <p
        style={{ color: 'white' }}
        className="mb-0 subtitle countdown-text"
      >15:00 - Церемония регистрации</p>
      <p
        style={{ color: 'white' }}
        className="mb-0 subtitle countdown-text"
      >17:00 - Праздничный банкет</p>
      </div>
    </Container>
  );
}

export default EventBlock;
