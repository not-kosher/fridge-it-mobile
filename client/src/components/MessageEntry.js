import React from 'react';
import {
  View,
  Text
} from 'react-native';

const MessageEntry = (props) => {
  return (
    <View>
      <Text>{props.message.messageText}</Text>
    </View>
  );
};

export default MessageEntry;