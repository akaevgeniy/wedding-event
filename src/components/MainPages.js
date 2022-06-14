import { Container } from 'react-bootstrap';
import ImageHeader from './ImageHeader';
import Map from './Map';
import EventBlock from './EventBlock';
import CountdownBlock from './CountdownBlock';
import FlameAnimation from './FlameAnimation';
import Playlist from './Playlist';
import Loading from './Loading';
import AboutBlock from './AboutBlock';

function MainPages() {
  return (
    <>
      <ImageHeader />
      <CountdownBlock />
      <EventBlock />
      <AboutBlock/>
      <Playlist />
      <Map />
      {/* <Loading/> */}
      <FlameAnimation />
    </>
  );
}

export default MainPages;
