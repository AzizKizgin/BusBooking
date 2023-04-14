/** @format */

import React, { FC, useState } from "react";
import { Pressable } from "native-base";
import FormInput from "./FormInput";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { screen } from "../../utils/consts";
interface DatePickerProps {
  placeholder: string;
  value: string;
  errors?: string;
  onSelect: (item: string) => void;
  width?: number;
}

const DatePicker: FC<DatePickerProps> = (props) => {
  const { placeholder, value, errors, onSelect, width } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleConfirm = (date: Date) => {
    onSelect(date.toLocaleDateString("tr-TR"));
    setIsModalVisible(false);
  };
  return (
    <>
      <Pressable
        onPress={() => setIsModalVisible(true)}
        width={width || screen.width * 0.9}
      >
        <FormInput
          handleChange={() => {}}
          editable={false}
          placeholder={placeholder}
          value={value}
          errors={errors}
          selectBox
        />
      </Pressable>
      <DateTimePickerModal
        isVisible={isModalVisible}
        mode='date'
        onConfirm={handleConfirm}
        onCancel={() => setIsModalVisible(false)}
      />
    </>
  );
};

export default DatePicker;
