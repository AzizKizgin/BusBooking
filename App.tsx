/** @format */

import { ToastMessageProvider } from "@aziz_kizgin/react-native-toast-message";
import { NativeBaseProvider, StatusBar } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import { AuthProvider } from "./src/context/AuthContex";
import { LocalizationProvider } from "./src/context/LocalizationContex";
import Router from "./src/navigation/Router";
export default function App() {
  return (
    <NativeBaseProvider>
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
