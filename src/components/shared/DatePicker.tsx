/** @format */

import React, { FC, useState } from "react";
import { Pressable } from "native-base";
import FormInput from "./FormInput";
import DateTimePickerModal from "react-native-modal-datetime-picker";
interface DatePickerProps {
  placeholder: string;
  value: string;
  errors?: string;
  onSelect: (item: string) => void;
}

const DatePicker: FC<DatePickerProps> = (props) => {
  const { placeholder, value, errors, onSelect } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleConfirm = (date: Date) => {
    onSelect(date.toLocaleDateString("en-US"));
    setIsModalVisible(false);
  };
  return (
    <>
      <Pressable onPress={() => setIsModalVisible(true)}>
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
