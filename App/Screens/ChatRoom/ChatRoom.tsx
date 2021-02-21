import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

const ChatRoom = () => {
  const route = useRoute();
  const {params} = route;

  return (
    <View>
      <Text>{params?.name}</Text>
    </View>
  );
};

export default ChatRoom;
