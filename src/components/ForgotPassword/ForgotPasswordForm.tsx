/** @format */

import React from "react";
import { VStack } from "native-base";
import { Formik } from "formik";
import { screen } from "../../utils/consts";
import Button from "../shared/Button";
import { useLocalization } from "../../context/LocalizationContext";
import { ForgotPasswordSchema } from "../../utils/formValidations";
import FormInput from "../shared/FormInput";

const ForgotPasswordForm = () => {
  const { strings } = useLocalization();
  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={ForgotPasswordSchema(strings)}
      validateOnChange={false}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <VStack width={screen.width * 0.9} alignSelf='center' space={5}>
          <FormInput
            placeholder={strings.email}
            value={values.email}
            handleChange={handleChange("email")}
            errors={errors.email || ""}
          />
          <Button title={strings.send} onPress={() => handleSubmit()} />
        </VStack>
      )}
    </Formik>
  );
};

export default ForgotPasswordForm;
