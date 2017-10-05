import React from 'react';
import { Picker, View, Text } from 'react-native';

const CustomPicker = ({ input, children, ...pickerProps }) => {
  // const { input, children, ...pickerProps } = props;

  return (
    <Picker
      {...pickerProps}
      onValueChange={input.onChange}
      selectedValue={input.value}
      children={children}
    />
  );
}

export default CustomPicker;