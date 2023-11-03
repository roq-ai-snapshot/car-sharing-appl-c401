import * as yup from 'yup';

export const maintenanceValidationSchema = yup.object().shape({
  maintenance_date: yup.date().required(),
  description: yup.string().nullable(),
  cost: yup.number().integer().nullable(),
  next_maintenance_date: yup.date().nullable(),
  car_id: yup.string().nullable().required(),
});
