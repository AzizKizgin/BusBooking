/** @format */

import React from "react";
import { Box, Text, VStack } from "native-base";
import DatePicker from "../shared/DatePicker";
import FormInput from "../shared/FormInput";
import { useLocalization } from "../../context/LocalizationContext";
import { useAuth } from "../../context/AuthContext";
import { useToast } from "@aziz_kizgin/react-native-toast-message";
import Button from "../shared/Button";

const SettingsForm = () => {
  const { strings, changeLanguage } = useLocalization();
  const { user } = useAuth();
  const { showToast } = useToast();
  return (
    <VStack space={4} alignSelf='center' mt={4}>
      <FormInput
        placeholder={strings.identityNumber}
        value={user?.identityNumber || ""}
        handleChange={() => {}}
        title={strings.identitynumber}
      />
      <DatePicker
        onSelect={() => {}}
        placeholder={strings.birthDate}
        value={user?.birthDate || ""}
        hasTitle
      />
      <FormInput
        placeholder={strings.password}
        value={"********"}
        handleChange={() => {}}
        isPassword
        title={strings.password}
        editable={false}
      />
      <FormInput
        placeholder={strings.confirmPassword}
        value={"********"}
        handleChange={() => {}}
        isPassword
        title={strings.confirmPassword}
        editable={false}
      />
      <Button
        onPress={() => {
          showToast({
            color: "info",
            message: strings.thisFeatureIsNotAvailable,
          });
        }}
        title={strings.save}
        marginTop={4}
      />
    </VStack>
  );
};

export default SettingsForm;
