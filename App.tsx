/** @format */

import { ToastMessageProvider } from "@aziz_kizgin/react-native-toast-message";
import { NativeBaseProvider, StatusBar } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import { AuthProvider } from "./src/context/AuthContext";
import { LocalizationProvider } from "./src/context/LocalizationContext";
import Router from "./src/navigation/Router";
import theme from "./src/theme/theme";
export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <LocalizationProvider>
        <ToastMessageProvider>
          <AuthProvider>
            <Router />
            <StatusBar />
          </AuthProvider>
        </ToastMessageProvider>
      </LocalizationProvider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
