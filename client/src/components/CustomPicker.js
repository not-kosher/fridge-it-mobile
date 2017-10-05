import React from 'react';
import { Picker, View, Text } from 'react-native';

const CustomPicker = (props) => {
  const { input, ...pickerProps } = props;

  return (
    <Picker
      {...pickerProps}
      onValueChange={(event, index, value) => input.onChange(input.value)}
      selectedValue={input.value}
      onBlur={input.onBlur}
      onFocus={input.onFocus}
    />
  );
}

export default CustomPicker;