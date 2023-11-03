import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  pickup_location: yup.string().nullable(),
  dropoff_location: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
  car_id: yup.string().nullable().required(),
});
