import { Formik, ErrorMessage } from 'formik';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { IoIosArrowDown } from 'react-icons/io';
import * as yup from 'yup';
import {
  ErrorForm,
  Btn,
  Container,
  Title,
  OfferForm,
  OfferInput,
  RadioInput,
  Style,
} from './OffersForm.styled';

const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required(),
  position_id: yup.string().required(),
  photo: yup.string().nullable(),
});

const values = { name: '', email: '', phone: '', position_id: '' };

export const OffersForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Container>
      <Title>Хочу предложения по туру</Title>
      <Formik
        validationSchema={schema}
        initialValues={values}
        onSubmit={handleSubmit}
      >
        <OfferForm>
          <label>
            <OfferInput name="name" type="text" placeholder="Name" />
            <ErrorMessage name="Name" component={ErrorForm} />
          </label>
          <label>
            <OfferInput name="email" type="email" placeholder="Email" />
            <ErrorMessage name="Email" component={ErrorForm} />
          </label>
          <label>
            <OfferInput name="phone" type="text" placeholder="Phone" />
            <ErrorMessage name="Phone" component={ErrorForm} />
          </label>
          <Style>
            <DropdownButton id="dropdown" title="Страна тура">
              <Dropdown.Item href="#/action-1">
                <RadioInput
                  name="position_id"
                  type="radio"
                  value="Турция"
                  id="1"
                />
                <label htmlFor="1">Турция</label>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <RadioInput
                  name="position_id"
                  type="radio"
                  value="Египет"
                  id="2"
                />
                <label htmlFor="2">Египет</label>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <RadioInput
                  name="position_id"
                  type="radio"
                  value="Шри-Ланка"
                  id="3"
                />
                <label htmlFor="3">Шри-Ланка</label>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-4">
                <RadioInput
                  name="position_id"
                  type="radio"
                  value="Доминикана"
                  id="4"
                />
                <label htmlFor="4">Доминикана</label>
              </Dropdown.Item>
            </DropdownButton>
            <IoIosArrowDown />
          </Style>
          <Btn type="submit">Получить предложения</Btn>
        </OfferForm>
      </Formik>
    </Container>
  );
};
