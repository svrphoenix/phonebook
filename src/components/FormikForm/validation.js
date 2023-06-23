import * as Yup from 'yup';

const numberPattern =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Required field!'),
  number: Yup.string()
    .matches(numberPattern, 'Phone number is not valid')
    .required('Required field!'),
});

export { ContactSchema };
