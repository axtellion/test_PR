import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 2;

  width: 100%;
`;

export const Wrap = styled.div`
  position: absolute;
  max-width: 1250px;
  left: 0;
  top: 400px;

  padding-left: 100px;
  padding-right: 40px;
  padding-top: 30px;
  padding-bottom: 30px;

  background-color: rgba(176, 224, 230, 0.5);
`;

export const Text = styled.h1`
  color: white;
  margin-bottom: 30px;
`;

export const Btn = styled.button`
  background-color: gold;
  padding: 10px 20px 10px 20px;

  height: 50px;
  border-radius: 10px;
  border: none;
`;
