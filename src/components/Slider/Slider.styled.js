import styled from 'styled-components';

export const SlidImg = styled.img`
  width: 150px;
  height: 210px;
  display: block;

  margin-right: 20px;
`;

export const List = styled.ul`
  width: 1200px;
  font-size: 25px;
  font-weight: 700;
  color: black;

  display: flex;
  gap: 30px;

  margin: 0 auto;
  margin-bottom: 70px;
`;

export const Item = styled.li`
  :first-child {
    color: gold;
  }
`;

export const Container = styled.div`
  width: 1700px;
  margin: 0 auto;

  padding-top: 60px;
  padding-bottom: 60px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
  background-color: #dcdcdc;

  padding: 50px;
  border-radius: 10px;
  width: 700px;
`;

export const CartWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartTitle = styled.div`
  padding-top: 10px;

  h3 {
    font-weight: 600;
  }
  p {
    width: 400px;

    padding-bottom: 10px;
    border-bottom: 1px solid #a9a9a9;
  }
`;

export const CartInfo = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;

  font-size: 21px;
`;

export const CartSum = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;

  display: flex;
  justify-content: space-between;

  svg {
    padding: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;

    background-color: gold;
  }
`;

export const CartSumText = styled.p`
  font-size: 25px;
  font-weight: 700;
  display: flex;

  gap: 10px;
  span {
    font-size: 15px;
    font-weight: 400px;
    color: #a9a9a9;
  }
`;
