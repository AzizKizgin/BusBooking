/** @format */

import React from "react";
import { Box, Pressable, VStack, Text } from "native-base";
import { Formik } from "formik";
import { screen } from "../../utils/consts";
import { useLocalization } from "../../context/LocalizationContext";
import Button from "../shared/Button";
import FormInput from "../shared/FormInput";
import { LoginSchema } from "../../utils/formValidations";
import { useAuth } from "../../context/AuthContext";
import ForgotPasswordText from "./ForgotPasswordText";
const LoginForm = () => {
  const { strings } = useLocalization();
  const { login } = useAuth();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema(strings)}
      validateOnChange={false}
      onSubmit={(values) => {
        login({
          email: values.email,
          password: values.password,
        });
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <VStack width={screen.width * 0.9} alignSelf='center' space={5}>
          <FormInput
            placeholder={strings.email}
            value={values.email}
            handleChange={handleChange("email")}
            errors={errors.email || ""}
          />
          <Box>
            <FormInput
              placeholder={strings.password}
              value={values.password}
              handleChange={handleChange("password")}
              isPassword
              errors={errors.password || ""}
            />
            <ForgotPasswordText />
          </Box>
          <Button title={strings.login} onPress={() => handleSubmit()} />
          <Pressable>
            <Text color='frenchBlue' fontSize='md' textAlign='center'>
              {strings.dontHaveAccount}
              <Text color='frenchBlue' fontWeight={"bold"} underline={true}>
                {strings.signUp}
              </Text>
            </Text>
          </Pressable>
        </VStack>
      )}
    </Formik>
  );
};

export default LoginForm;
