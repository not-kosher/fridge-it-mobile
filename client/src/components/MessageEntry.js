import React from 'react';
import {
  View,
  Text
} from 'react-native';

const MessageEntry = (props) => {
  return (
    <View style={styles.messageContainer}>
      <View style={styles.nameContainer}>
        <Text style={{...styles.text, ...styles.name}}>{props.message.user}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.message.messageText}</Text>
      </View>
    </View>
  );
};

const styles = {
  messageContainer: {
    flex: 1,
    height: 110,
    backgroundColor: '#FFFAC2',
    borderRadius: 5,
    margin: 15,
    marginBottom: 0
  },
  nameContainer: {
    height: 35
  },
  textContainer: {
    flex: 1
  },
  text: {
    fontSize: 20,
    color: '#000000b3',
    padding: 10
  },
  name: {
    fontWeight: 'bold',
    paddingBottom: 0
  }
}

export default MessageEntry;