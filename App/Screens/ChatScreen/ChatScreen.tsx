import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import styles from './Styles';
import {ChatRoom} from '../../Types/types';
import moment from 'moment';
import Colors from '../../Themes/Colors';

export type ChatRoomProps = {
  chatRoom: ChatRoom;
};

const ChatScreen = (props: ChatRoomProps) => {
  const {chatRoom} = props;
  const user = chatRoom.users[1];

  return (
    <View style={styles.chatContainer}>
      <View style={styles.leftContainer}>
        <StatusBar
          animated={true}
          backgroundColor={Colors.header.backgroundColor}
          showHideTransition="none"
          hidden={false}
        />

        <Image source={{uri: user.imageUri}} style={styles.avatar} />
        <View style={styles.middleContainer}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
        </View>
      </View>
      <Text style={styles.date}>
        {moment(chatRoom.lastMessage.createdAt).format('DD/MM/YY')}
      </Text>
    </View>
  );
};

export default ChatScreen;
