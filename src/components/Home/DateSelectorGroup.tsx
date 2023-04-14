/** @format */

import React, { FC } from "react";
import { Box, HStack, Text } from "native-base";
import DatePicker from "../shared/DatePicker";
import { useLocalization } from "../../context/LocalizationContext";
import { screen } from "../../utils/consts";

interface DateSelectorGroupProps {
  departureDate: string;
  setDepartureDate: (date: string) => void;
  returnDate: string;
  setReturnDate: (date: string) => void;
  hasReturn: boolean;
}

const DateSelectorGroup: FC<DateSelectorGroupProps> = (props) => {
  const { strings } = useLocalization();
  const {
    departureDate,
    setDepartureDate,
    returnDate,
    setReturnDate,
    hasReturn,
  } = props;
  return (
    <HStack space={3} alignSelf={"center"}>
      <DatePicker
        width={screen.width * 0.4}
        placeholder={strings.departureDate}
        onSelect={(date) => {
          setDepartureDate(date);
        }}
        value={departureDate}
      />
      {hasReturn && (
        <DatePicker
          width={screen.width * 0.4}
          placeholder={strings.returnDate}
          onSelect={(date) => {
            setReturnDate(date);
          }}
          value={returnDate}
        />
      )}
    </HStack>
  );
};

export default DateSelectorGroup;
