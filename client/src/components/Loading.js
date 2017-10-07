import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { PacmanIndicator } from 'react-native-indicators'

const Loading = () => (
  <PacmanIndicator 
    color='rgb(46, 145, 212)'
    size={120}
  />
);

export default Loading;