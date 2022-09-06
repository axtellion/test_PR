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
    right: 1200px;
    button {
      background: gold;
      border-radius: 100%;
      width: 20px;
      height: 5px;
    }
  }
`;

export const BgHero = styled.img`
  display: block;
  height: 700px;
  width: 100%;
`;
