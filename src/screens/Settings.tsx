/** @format */

import React from "react";
import { Box, Center, HStack, ScrollView, Text } from "native-base";
import { useAuth } from "../context/AuthContext";
import { useLocalization } from "../context/LocalizationContext";
import { useToast } from "@aziz_kizgin/react-native-toast-message";
import SettingsForm from "../components/Settings/SettingsForm";
import { CheckBox } from "@aziz_kizgin/react-native-checkbox";

const Settings = () => {
  const { user, logout } = useAuth();
  const { strings, changeLanguage, currentLanguage } = useLocalization();
  const { showToast } = useToast();
  return (
    <Box flex={1} padding={4} alignItems='center' justifyContent='center'>
      <ScrollView>
        <Center
          backgroundColor={"frenchBlue"}
          rounded={"full"}
          width={125}
          height={125}
          alignSelf={"center"}
        >
          <Text fontSize='6xl' fontWeight='bold' color='coconut'>
            {user?.name.charAt(0)}
          </Text>
        </Center>
        <HStack space={2} alignSelf='center'>
          <Text fontSize='2xl' fontWeight='bold' color='frenchBlue' mt={4}>
            {user?.name}
          </Text>
          <Text fontSize='2xl' fontWeight='bold' color='frenchBlue' mt={4}>
            {user?.surname}
          </Text>
        </HStack>
        <Text
          fontSize='xl'
          fontWeight='bold'
          color='frenchBlue'
          mt={4}
          alignSelf='center'
        >
          {user?.email}
        </Text>
        <HStack space={2} alignSelf='center' mt={4}>
          <Text fontSize='md' fontWeight='bold' color='frenchBlue'>
            {strings.changeLanguage} :
          </Text>
          <HStack space={2} alignItems='center' justifyContent={"center"}>
            <CheckBox
              isChecked={currentLanguage === "tr"}
              onChange={() => {
                if (currentLanguage === "tr") {
                  return;
                }
                changeLanguage("tr");
              }}
            />
            <Text
              fontSize='lg'
              fontWeight='bold'
              color='frenchBlue'
              alignSelf='center'
            >
              Türkçe
            </Text>
          </HStack>
          <HStack space={2} alignItems='center' justifyContent={"center"}>
            <CheckBox
              isChecked={currentLanguage === "en"}
              onChange={() => {
                if (currentLanguage === "en") {
                  return;
                }
                changeLanguage("en");
              }}
            />
            <Text
              fontSize='lg'
              fontWeight='bold'
              color='frenchBlue'
              alignSelf='center'
            >
              English
            </Text>
          </HStack>
        </HStack>
        <SettingsForm />
      </ScrollView>
    </Box>
  );
};

export default Settings;
