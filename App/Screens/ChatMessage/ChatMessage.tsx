import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {ChatMessageProps} from '../../Types/types';

const ChatMessage = (props: ChatMessageProps) => {
  const {messages} = props;
  return (
    <View>
      <Text>{messages}</Text>
    </View>
  );
};

export default ChatMessage;
