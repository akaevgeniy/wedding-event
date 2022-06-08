import '../styles/loading.css'
import { Container, } from 'react-bootstrap';

function Loading() {
  return (
<Container className='d-flex align-items-center justify-content-center'>
<div className="waviy title mt-3 mb-3">
      <span className="--i:1">С</span>
      <span className="--i:2">К</span>
      <span className="--i:3">О</span>
      <span className="--i:4">Р</span>
      <span className="--i:5">О</span>
      <span className="--i:6">.</span>
      <span className="--i:7">.</span>
      <span className="--i:8">.</span>
    </div>
</Container>

  );
}

export default Loading;
