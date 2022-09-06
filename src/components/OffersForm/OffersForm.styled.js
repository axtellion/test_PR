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

  padding: 10px 15px 10px 15px;
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
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  background-color: rgba(47, 79, 79, 0.8);
  margin: 0 auto;
`;

export const OfferInput = styled(Field)`
  background-color: transparent;
  border: none;

  border-bottom: 1px solid white;

  ::placeholder {
    color: white;
    padding: 10px;
  }
`;
