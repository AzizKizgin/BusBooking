/** @format */

import React from "react";
import { VStack } from "native-base";
import { Formik } from "formik";
import { RegisterSchema } from "../../utils/formValidations";
import { useLocalization } from "../../context/LocalizationContext";
import { useAuth } from "../../context/AuthContext";
import FormInput from "../shared/FormInput";
import Button from "../shared/Button";
import { screen } from "../../utils/consts";
import SelectBox from "../shared/SelectBox";
import DatePicker from "../shared/DatePicker";
import TermsCheckBox from "./TermsCheckBox";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useToast } from "@aziz_kizgin/react-native-toast-message";

const RegisterForm = () => {
  const { strings } = useLocalization();
  const { register } = useAuth();
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthenticationParamsList>>();
  const { showToast } = useToast();

  const navigateToLogin = () => {
    navigation.navigate("Login");
    showToast({
      color: "success",
      message: strings.registerSuccess,
      textStyle: {
        color: "white",
      },
    });
  };
  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        identityNumber: "",
        birthDate: "",
        gender: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreed: false,
      }}
      validationSchema={RegisterSchema(strings)}
      validateOnChange={false}
      onSubmit={(values) => {
        register({
          name: values.name,
          surname: values.surname,
          identityNumber: values.identityNumber,
          birthDate: values.birthDate,
          email: values.email,
          password: values.password,
          gender: values.gender,
        }).then(() => {
          navigateToLogin();
        });
      }}
    >
      {({ handleChange, setFieldValue, handleSubmit, values, errors }) => (
        <VStack
          width={screen.width * 0.9}
          alignSelf='center'
          space={5}
          marginTop={10}
        >
          <FormInput
            placeholder={strings.name}
            value={values.name}
            handleChange={handleChange("name")}
            errors={errors.name || ""}
          />
          <FormInput
            placeholder={strings.surname}
            value={values.surname}
            handleChange={handleChange("surname")}
            errors={errors.surname || ""}
          />
          <FormInput
            placeholder={strings.email}
            value={values.email}
            handleChange={handleChange("email")}
            errors={errors.email || ""}
          />
          <FormInput
            placeholder={strings.identitynumber}
            value={values.identityNumber}
            handleChange={(text) => {
              handleChange("identityNumber")(text.toString());
            }}
            errors={errors.identityNumber || ""}
            keyboardType='numeric'
          />
          <DatePicker
            onSelect={(value) => {
              handleChange("birthDate")(value);
            }}
            placeholder={strings.birthDate}
            value={values.birthDate}
            errors={errors.birthDate || ""}
          />
          <SelectBox
            data={[strings.man, strings.woman]}
            onSelect={(value) => {
              handleChange("gender")(value);
            }}
            placeholder={strings.gender}
            value={values.gender}
            errors={errors.gender || ""}
          />
          <FormInput
            placeholder={strings.password}
            value={values.password}
            handleChange={handleChange("password")}
            errors={errors.password || ""}
            isPassword
          />
          <FormInput
            placeholder={strings.confirmPassword}
            value={values.confirmPassword}
            handleChange={handleChange("confirmPassword")}
            errors={errors.confirmPassword || ""}
            isPassword
          />
          <TermsCheckBox
            error={errors.agreed || ""}
            onChange={() => setFieldValue("agreed", !values.agreed)}
            value={values.agreed}
          />
          <Button title={strings.register} onPress={() => handleSubmit()} />
        </VStack>
      )}
    </Formik>
  );
};

export default RegisterForm;
