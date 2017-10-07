import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PacmanIndicator } from 'react-native-indicators'

import MessageEntry from './MessageEntry';
import * as messageActions from '../actions/messageActions';

class MessageView extends Component {
  componentWillMount() {
    this.props.messageActions.fetchMessages(this.props.fridge.id);
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
        {this.props.messageList.length > 0 ? 
          this.props.messageList.map((message) => (
            <MessageEntry message={message} />
          ))
          : 
          <Text>Your message board is empty</Text>
        }
        </View>
      </View>
    );
  }
} 

const messageState = (store) => {
  return {
    fridge: store.fridge.fridge,
    messageList: store.message.messages
  }
};

const messageDispatch = (dispatch) => {
  return {
    messageActions: bindActionCreators(messageActions, dispatch)
  }
};

export default connect(messageState, messageDispatch)(MessageView);