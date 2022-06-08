import { Container, Image } from 'react-bootstrap';
import '../styles/flame.css';
import React from 'react';
import blackdrum from '../assets/blackdrum1.png';

function FlameAnimation() {
  return (
    <Container style={{paddingBottom: 520}} className="d-flex flex-column align-items-center justify-content-center position-relative">
      <div className="mo-fire">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="125"
          height="189.864"
          x="0"
          y="0"
          version="1.1"
          viewBox="0 0 125 189.864"
          xmlSpace="preserve"
        >
          <path
           className="flame-main"
            fill="#F36E21"
            d="M76.553 186.09s-10.178-2.976-15.325-8.226-9.278-16.82-9.278-16.82-.241-6.647-4.136-18.465c0 0 3.357 4.969 5.103 9.938 0 0-5.305-21.086 1.712-30.418 7.017-9.333.571-35.654-2.25-37.534 0 0 13.07 5.64 19.875 47.54 6.806 41.899 16.831 45.301 6.088 53.985"
          ></path>
          <path
            className="flame-main one"
            fill="#F6891F"
            d="M61.693 122.257c4.117-15.4 12.097-14.487-11.589-60.872 0 0 32.016 10.223 52.601 63.123 20.585 52.899-19.848 61.045-19.643 61.582.206.537-19.401-.269-14.835-18.532s-10.651-29.902-6.534-45.301z"
          ></path>
          <path
           className="flame-main two"
            fill="#FFD04A"
            d="M81.657 79.192s11.549 24.845 3.626 40.02c-7.924 15.175-21.126 41.899-.425 64.998 0 0 40.847-33.305-3.201-105.018z"
          ></path>
          <path
           className="flame-main three"
            fill="#FDBA16"
            d="M99.92 101.754s-23.208 47.027-12.043 80.072c0 0 32.741-16.073 20.108-45.79-12.631-29.717-8.065-21.928-8.065-34.282z"
          ></path>
          <path
           className="flame-main four"
            fill="#F36E21"
            d="M103.143 105.917s8.927 30.753-1.043 46.868c-9.969 16.115-14.799 29.041-14.799 29.041s47.086-17.223 15.842-75.909z"
          ></path>
          <path
           className="flame-main five"
            fill="#FDBA16"
            d="M62.049 104.171s-15.645 67.588 10.529 77.655c26.175 10.068-3.545-51.065-10.529-77.655z"
          ></path>
          <path
           className="flame"
            fill="#F36E21"
            d="M101.011 112.926s8.973 10.519 4.556 16.543c-6.197.266 1.185-12.063-4.556-16.543zM55.592 126.854s-3.819 13.29 2.699 16.945c5.747-2.319-2.384-11.536-2.699-16.945zM54.918 104.595s-3.959 6.109-1.24 8.949c3.252-.288-1.45-6.215 1.24-8.949z"
          ></path>
        </svg>
      </div>
      <Image style={{ position: 'absolute', maxWidth: '200px', zIndex: '5', top: 250 }} src={blackdrum} />
    </Container>
  );
}

export default FlameAnimation;
