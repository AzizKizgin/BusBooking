/** @format */
import React from "react";
import { Box, Text } from "native-base";
import Logo from "../components/shared/Logo";
import ForgotPasswordForm from "../components/ForgotPassword/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <Box flex={1} backgroundColor='midnight' justifyContent='center'>
      <Logo />
      <ForgotPasswordForm />
    </Box>
  );
};

export default ForgotPassword;
