import React from 'react';
import { TextInput, View, Text } from 'react-native';

const CustomTextInput = (props) => {
  const { input, ...inputProps } = props;

  return (
    <TextInput
      {...inputProps}
      onChangeText={input.onChange}
      onBlur={input.onBlur}
      onFocus={input.onFocus}
      value={input.value}
    />
  );
}

export default CustomTextInput;