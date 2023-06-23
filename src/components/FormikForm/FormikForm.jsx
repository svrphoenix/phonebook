import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Button } from '@mui/material';

import { FormTitle } from './FormikForm.styled';
import {
  StyledForm,
  FormContainer,
  Input,
  ErrMessage,
} from './FormikForm.styled';
import { ContactSchema } from './validation';

export const FormikForm = ({
  title,
  defaultName = '',
  defaultNumber = '',
  handleSubmit,
}) => {
  return (
    <Formik
      initialValues={{
        name: defaultName,
        number: defaultNumber,
      }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <FormTitle>{title}</FormTitle>
        <FormContainer>
          <div>
            <label>
              Contact name
              <Input
                type="text"
                name="name"
                placeholder="John Smith"
                required
              />
              <ErrMessage name="name" component="p" />
            </label>
          </div>
          <div>
            <label>
              Phone number
              <Input
                type="tel"
                name="number"
                placeholder="+145678265867"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
              <ErrMessage name="number" component="p" />
            </label>
          </div>
          <Button variant="contained" type="submit" sx={{ width: 200 }}>
            {title}
          </Button>
        </FormContainer>
      </StyledForm>
    </Formik>
  );
};

FormikForm.propTypes = {
  title: PropTypes.string,
  defaultName: PropTypes.string,
  defaultNumber: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
};

export default FormikForm;
