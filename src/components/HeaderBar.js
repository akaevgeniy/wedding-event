import { Container, Navbar } from 'react-bootstrap';

function HeaderBar() {

  function scrollTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }
  
  return (
    <Navbar style={{'background-color': '#A9A9A9' }} className='p-0 bg-gradient fixed-top' variant="dark">
      <Container className='d-flex flex-row align-items-center justify-content-center'>
        <Navbar.Brand className='p-0 m-0 header_text' onClick={scrollTop}>{`E & L`}</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default HeaderBar;
