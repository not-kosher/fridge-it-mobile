import React from 'react';
import { Picker, View, Text } from 'react-native';

const CustomPicker = ({ input, children, ...pickerProps }) => {
  return (
    <Picker
      onValueChange={input.onChange}
      selectedValue={input.value}
      children={children}
      {...pickerProps}
    />
  );
}

export default CustomPicker;