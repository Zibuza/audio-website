import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Min. 2 characters')
    .max(25, 'Max. 25 characters')
    .required('Is required'),
  email: Yup.string().email('Wrong format').required('Is required'),
  phone: Yup.string()
    .matches(/^\+\d{1,2} \d{3} \d{3} \d{3}$/, 'Wrong format')
    .required('Is required'),
  address: Yup.string()
    .min(2, 'Min. 2 characters')
    .max(25, 'Max. 25 characters')
    .required('Is required'),
  zipCode: Yup.string()
    .matches(/^\d{2}-?\d{3}$/, 'Wrong format')
    .required('Is required'),
  city: Yup.string()
    .min(2, 'Min. 2 characters')
    .max(25, 'Max. 25 characters')
    .required('Is required'),
  country: Yup.string()
    .min(2, 'Min.2 characters')
    .max(25, 'Max. 25 characters')
    .required('Is required'),
});
