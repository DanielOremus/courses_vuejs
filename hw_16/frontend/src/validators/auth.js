import * as yup from "yup"

export const loginFormSchema = yup.object({
  email: yup
    .string()
    .required("*ел. пошта* є обов'язковим полем")
    .email("Ел. пошта не є коректною")
    .trim(),
  password: yup.string().required("*пароль* є обов'язковим полем"),
})

export const registerFormSchema = yup.object({
  email: yup
    .string()
    .required("*ел. пошта* є обов'язковим полем")
    .email("Ел. пошта не є коректною")
    .trim(),
  name: yup
    .string()
    .required("*ім'я* є обов'язковим полем")
    .min(3, "*ім'я* має складатись мінімум з 3 символів")
    .max(20, "*ім'я* може складатись максимум з 30 символів")
    .trim(),
  password: yup
    .string()
    .required("*пароль* є обов'язковим полем")
    .min(3, "*пароль* має складатись мінімум з 3 символів")
    .max(50, "*пароль* може складатись максимум з 50 символів"),
})
