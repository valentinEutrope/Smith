import * as yup from "yup";

export const validationSchema = yup.object().shape({
  skillInput: yup
    .string()
    .required("Veuillez entrer un libellé avant d'ajouter"),
});
