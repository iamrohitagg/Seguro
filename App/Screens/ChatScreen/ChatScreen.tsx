import React from 'react';
import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import styles from './Styles';
import {ChatRoom} from '../../Types/types';
import moment from 'moment';
import Colors from '../../Themes/Colors';
import {useNavigation} from '@react-navigation/native';

export type ChatRoomProps = {
  chatRoom: ChatRoom;
};

const ChatScreen = (props: ChatRoomProps) => {
  const {chatRoom} = props;
  const user = chatRoom.users[1];
  const navigation = useNavigation();

  const onChatListItemPress = () => {
    navigation.navigate('ChatRoom', {name: user.name});
  };

  return (
    <TouchableOpacity
      style={styles.chatContainer}
      onPress={onChatListItemPress}>
      <View style={styles.leftContainer}>
        <StatusBar
          backgroundColor={Colors.header.backgroundColor}
          showHideTransition="none"
          barStyle="light-content"
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
    </TouchableOpacity>
  );
};

export default ChatScreen;
