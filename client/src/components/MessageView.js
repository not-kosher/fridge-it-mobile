import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { PacmanIndicator } from 'react-native-indicators'

class MessageView extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <View>
        <PacmanIndicator 
          color='#000000'
          size={120}
        />
        <View>
          <Text>Your messages</Text>
        </View>
        <View>
          
        </View>
      </View>
    );
  }
} 

export default MessageView;