import styled from 'styled-components';
import formBd from '../../images/offerFormBg.jpg';
import { Form, Field } from 'formik';

export const ErrorForm = styled.div`
  color: red;
  margin-bottom: 10px;
`;

export const Btn = styled.button`
  color: black;
  background-color: gold;
  border: none;

  height: 50px;
  padding: 10px 15px;
  border-radius: 10px;
`;

export const Container = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${formBd});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  padding: 40px;
`;

export const Title = styled.h2`
  color: white;
  font-size: 30px;

  width: 1200px;
  margin: 0 auto;
  margin-bottom: 40px;

  text-transform: uppercase;
`;

export const OfferForm = styled(Form)`
  width: 1200px;
  height: 130px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  background-color: rgba(47, 79, 79, 0.8);
  margin: 0 auto;
`;

export const OfferInput = styled(Field)`
  height: 40px;

  color: white;
  background-color: transparent;

  border: none;
  outline: none;

  border-bottom: 1px solid #a9a9a9;
  :focus {
    border-bottom: 1px solid gold;
  }
  ::placeholder {
    color: white;
    padding: 10px;
  }
`;

export const RadioInput = styled(Field)`
  position: absolute;
  left: -500px;
  top: -1000px;
`;

export const Style = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid #a9a9a9;
  margin-right: 20px;
  div .show {
    background-color: white;
    :hover {
      color: gold;
    }
  }
  a {
    :hover {
      color: gold;
    }
  }
  gap: 5px;
  #dropdown {
    height: 40px;
    color: #a9a9a9;
    background-color: transparent;
    outline: none;
    border: none;
    padding: 0;
    :hover,
    :focus,
    :active {
      box-shadow: none;
    }
    ::after {
      display: none;
    }
  }
  svg {
    width: 20px;
    height: 20px;
    color: #a9a9a9;
  }
`;
