import styled from 'styled-components';

export const Title = styled.h2`
  width: 1200px;
  font-size: 25px;
  font-weight: 700px;

  padding-left: 40px;
  margin: 0 auto;
  margin-bottom: 50px;

  text-transform: uppercase;
`;

export const Photo = styled.img`
  width: 500px;
  height: 300px;

  display: block;
`;

export const Container = styled.div`
  width: 1200px;

  display: flex;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 40px;
  margin: 0 auto;
`;

export const Text = styled.p`
  position: relative;
  width: 550px;

  padding: 20px;
  margin: auto 0;
  border-right: 1px solid #a9a9a9;

  ::after {
    content: '';
    width: 10px;
    height: 10px;
    background-color: gold;
    border-radius: 50%;
    position: absolute;
    right: -5px;
    top: 0;
  }
`;
