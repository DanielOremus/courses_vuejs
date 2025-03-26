import * as yup from "yup"

export const loginFormSchema = yup.object({
  email: yup
    .string()
    .required("*ел. пошта* є обов'язковим полем")
    .email("Ел. пошта не є коректною")
    .trim(),
  password: yup.string().required("*пароль* є обов'язковим полем"),
})
