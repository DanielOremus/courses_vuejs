import * as yup from "yup"

export const productFormSchema = yup.object({
  name: yup
    .string()
    .required("*назва* є обов'язковим полем")
    .min(3, "*назва* може включати щонайменше 3 символи")
    .max(30, "*назва* може включати щонайбільше 30 символів")
    .trim(),
  description: yup
    .string()
    .transform((current) => (current === "" ? null : current))
    .nullable()
    .min(10, "*опис* може включати щонаймене 10 символів")
    .max(200, "*опис* може включати щонайбільше 200 символів")
    .trim(),
  price: yup
    .number()
    .required("*ціна* є обов'язковим полем")
    .moreThan(0, "*ціна* має бути позитивним числом"),
  mass: yup
    .number()
    //TODO: fix NaN
    .required("*маса* є обов'язковим полем")
    .min(50, "*маса* має бути щонайменше 50 грам"),
  category: yup.string().required("*категорія* є обов'язковим полем"),
})
