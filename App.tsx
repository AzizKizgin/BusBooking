/** @format */

import { NativeBaseProvider, StatusBar } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import Router from "./src/navigation/Router";
export default function App() {
  return (
    <NativeBaseProvider>
      <Router />
      <StatusBar />
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