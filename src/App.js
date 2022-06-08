import { Container } from 'react-bootstrap';
import './App.css';
import HeaderBar from './components/HeaderBar';
import MainPages from './components/MainPages';

function App() {
  return (
   <Container className='p-0'>
  <HeaderBar/>
 <MainPages/>
   </Container>
  );
}

export default App;
