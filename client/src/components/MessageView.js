import React, { Component } from 'react';
import {
  View,
  ScrollView,
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
      <View style={styles.messageViewContainer}>
        <View style={styles.messageViewTitle}>
          <Text style={styles.text}>Your messages</Text>
        </View>
        <View style={styles.messageList}>
          <ScrollView>
            {this.props.messageList.length > 0 ? 
              this.props.messageList.map((message) => (
                <MessageEntry key={message.id} message={message} />
              ))
              : 
              <Text style={styles.emptyText}>Your message board is empty</Text>
            }
          </ScrollView>
        </View>
      </View>
    );
  }
} 

const styles = {
  messageViewContainer: {
    flex: 1
  },
  messageViewTitle: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 15
  },
  messageList: {
    flex: 5
  },
  emptyText: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#000000b3'
  },
  text: {
    alignSelf: 'center',
    fontSize: 34,
    fontWeight: '600',
    color: '#3c85ca',
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