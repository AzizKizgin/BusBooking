/** @format */

import * as Yup from "yup";
// import {checkIfEmailIsTaken, checkIfUsernameIsTaken} from '../data/data';

export const LoginSchema = (strings: any) =>
  Yup.object().shape({
    email: Yup.string()
      .email(strings.emailIsInvalid)
      .required(strings.emailIsRequired),
    password: Yup.string()
      .min(6, strings.passwordNeedsToBe6CharactersOrMore)
      .required(strings.passwordIsRequired),
  });

// export const SignUpSchema = (strings: any) =>
//   Yup.object().shape({
//     email: Yup.string()
//       .email(strings.emailIsInvalid)
//       .required(strings.emailIsRequired)
//       .test('is-email-taken', strings.emailIsInUse, async (value) => {
//         if (value) {
//           const isTaken = await checkIfEmailIsTaken(value);
//           return !isTaken;
//         }
//         return true;
//       }),
//     password: Yup.string()
//       .min(6, strings.passwordNeedsToBe6CharactersOrMore)
//       .required(strings.passwordIsRequired),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref('password'), undefined], strings.passwordDoesNotMatch)
//       .required(strings.passwordIsRequired),
//     username: Yup.string()
//       .min(3, strings.usernameNeedsToBe3CharactersOrMore)
//       .required(strings.usernameIsRequired)
//       .test('is-username-taken', strings.usernameIsTaken, async (value) => {
//         if (value) {
//           const isTaken = await checkIfUsernameIsTaken(value);
//           return !isTaken;
//         }
//         return true;
//       }),
//     agreed: Yup.boolean().oneOf([true], strings.shouldAgreeToTerms),
//   });

export const ForgotPasswordSchema = (strings: any) =>
  Yup.object().shape({
    email: Yup.string()
      .email(strings.emailIsInvalid)
      .required(strings.emailIsRequired),
  });
