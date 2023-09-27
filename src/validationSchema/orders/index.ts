import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  order_number: yup.string().required(),
  total_amount: yup.number().integer().required(),
  client_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
