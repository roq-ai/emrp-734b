import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  price: yup.number().integer().required(),
  quantity: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
