/** @format */

import React from "react";
import { Box, Text } from "native-base";
import LoginForm from "../components/Login/LoginForm";
import Logo from "../components/shared/Logo";

const Login = () => {
  return (
    <Box flex={1} justifyContent='center'>
      <Logo />
      <LoginForm />
    </Box>
  );
};

export default Login;
