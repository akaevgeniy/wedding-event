import Image from 'react-bootstrap/Image';
import { Container } from 'react-bootstrap';
import '../styles/shine.css';
import us from '../assets/us.jpg';

function ImageHeader() {
  return (
    <Container
      className="p-0 d-flex flex-column align-items-center justify-content-center position-relative"
      style={{ marginTop: '54px' }}
    >
      <Image alt='Это мы. Такие красивые' style={{ maxWidth: '100%', opacity: '0.5' }} src={us} />

      <h2 style={{fontSize: 20, letterSpacing: 4.1}} className="absolute-text btn-shine mb-0">СВАДЕБНОЕ ТОРЖЕСТВО</h2>
      <h2 className="absolute-text btn-shine mb-0" style={{paddingTop: '17px'}}>{`ЕВГЕНИЙ & ЛЮБОВЬ`}</h2>
    </Container>
  );
}

export default ImageHeader;
