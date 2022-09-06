import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  ErrorForm,
  Btn,
  Container,
  Title,
  OfferForm,
  OfferInput,
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
            <ErrorMessage name="name" component={ErrorForm} />
          </label>
          <label>
            <OfferInput name="email" type="email" placeholder="Email" />
            <ErrorMessage name="name" component={ErrorForm} />
          </label>
          <label>
            <OfferInput name="phone" type="text" placeholder="Phone" />
            <ErrorMessage name="name" component={ErrorForm} />
          </label>
          <label>
            <OfferInput
              name="position_id"
              type="text"
              placeholder="Страна тура"
            />
            <ErrorMessage name="name" component={ErrorForm} />
          </label>
          {/* <label>
            <Field name="position_id" type="radio" value="1" />
            Турция
            <Field name="position_id" type="radio" value="2" />
            Египет
            <Field name="position_id" type="radio" value="3" />
            Шри-Ланка
            <Field name="position_id" type="radio" value="4" />
            Доминикана
            <ErrorMessage name="name" component={ErrorForm} />
          </label> */}
          <Btn type="submit">Получить предложения</Btn>
        </OfferForm>
      </Formik>
    </Container>
  );
};
