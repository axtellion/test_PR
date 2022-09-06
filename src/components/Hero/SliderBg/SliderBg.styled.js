import styled from 'styled-components';

export const Text = styled.h1``;

export const Btn = styled.button`
  background-color: gold;
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  span {
    display: none;
  }
  .carousel-indicators {
    right: 1000px;
    button {
      background: gold;
      border-radius: 50%;
      width: 15px;
      height: 5px;
    }
  }
`;

export const BgHero = styled.img`
  display: block;
  height: 100vh;
  width: 100%;
`;
