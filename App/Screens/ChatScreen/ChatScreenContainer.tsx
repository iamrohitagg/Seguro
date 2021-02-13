import React from 'react';
import chatRooms from './ChatRoom';
import ChatScreen from './ChatScreen';
import {View, FlatList} from 'react-native';
import styles from './Styles';

const ChatScreenContainer = () => {
  return (
    <View style={styles.parentContainer}>
      <FlatList
        data={chatRooms}
        renderItem={({item}) => <ChatScreen chatRoom={item} />}
        style={{width: '100%'}}
      />
    </View>
  );
};

export default ChatScreenContainer;
