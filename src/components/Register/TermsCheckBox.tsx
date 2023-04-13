/** @format */

import React, { FC } from "react";
import { Box, HStack, Text } from "native-base";
import { CheckBox } from "@aziz_kizgin/react-native-checkbox";
import theme from "../../theme/theme";
import { useLocalization } from "../../context/LocalizationContext";

interface TermsCheckBoxProps {
  value: boolean;
  error: string;
  onChange: () => void;
}

const TermsCheckBox: FC<TermsCheckBoxProps> = (props) => {
  const { strings } = useLocalization();
  const { value, error, onChange } = props;
  return (
    <Box justifyContent='center' alignItems='center'>
      <HStack alignItems='center' justifyContent='center' space={4}>
        <CheckBox
          isChecked={value}
          onChange={onChange}
          customColor={theme.colors.frenchBlue}
        />
        <Text fontSize='md' color='frenchBlue' underline={true}>
          {strings.agreeToTerms}
        </Text>
      </HStack>
      <Text color='red.500'>{error}</Text>
    </Box>
  );
};

export default TermsCheckBox;
