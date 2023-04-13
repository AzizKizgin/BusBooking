/** @format */

import React from "react";
import { Box, ScrollView, KeyboardAvoidingView } from "native-base";
import Logo from "../components/shared/Logo";
import RegisterForm from "../components/Register/RegisterForm";

const Register = () => {
  return (
    <KeyboardAvoidingView behavior={"height"} flex={1}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 200 }}
        automaticallyAdjustKeyboardInsets={true}
      >
        <Box flex={1} backgroundColor='midnight' justifyContent='center'>
          <Logo />
          <RegisterForm />
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;
