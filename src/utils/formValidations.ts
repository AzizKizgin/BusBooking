/** @format */

import * as Yup from "yup";

export const LoginSchema = (strings: any) =>
  Yup.object().shape({
    email: Yup.string()
      .email(strings.emailIsInvalid)
      .required(strings.emailIsRequired),
    password: Yup.string()
      .min(6, strings.passwordNeedsToBe6CharactersOrMore)
      .required(strings.passwordIsRequired),
  });

export const RegisterSchema = (strings: any) =>
  Yup.object().shape({
    email: Yup.string()
      .email(strings.emailIsInvalid)
      .required(strings.emailIsRequired),
    password: Yup.string()
      .min(6, strings.passwordNeedsToBe6CharactersOrMore)
      .required(strings.passwordIsRequired),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], strings.passwordDoesNotMatch)
      .required(strings.passwordIsRequired),
    name: Yup.string()
      .min(3, strings.nameNeedsToBe3CharactersOrMore)
      .required(strings.nameisrequired),
    surname: Yup.string()
      .required(strings.surnameisrequired)
      .min(2, strings.surnameNeedsToBe2CharactersOrMore),
    agreed: Yup.boolean().oneOf([true], strings.shouldAgreeToTerms),
    identityNumber: Yup.string()
      .required(strings.identitynumberisrequired)
      .test(
        "len",
        strings.identitynumberneedsToBe11Characters,
        (val: any) => val && val.length === 11,
      ),
    birthDate: Yup.string().required(strings.birthdateisrequired),
    gender: Yup.string().required(strings.genderisrequired),
  });

export const ForgotPasswordSchema = (strings: any) =>
  Yup.object().shape({
    email: Yup.string()
      .email(strings.emailIsInvalid)
      .required(strings.emailIsRequired),
  });
