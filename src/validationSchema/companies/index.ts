import * as yup from 'yup';

export const companyValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  address: yup.string().nullable(),
  established_date: yup.date().nullable(),
  website: yup.string().nullable(),
  name: yup.string().required(),
});
