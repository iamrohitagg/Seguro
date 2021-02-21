import * as React from 'react';
import Home from '../Home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MainTabParamList} from '../Types/types';
import Login from '../Login';
import Colors from '../Themes/Colors';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OcticonIcon from 'react-native-vector-icons/Octicons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import styles from './Styles';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Fonts from '../Themes/Fonts';
import ChatScreenContainer from '../Screens/ChatScreen/ChatScreenContainer';
import ChatRoomContainer from '../Screens/ChatRoom/ChatRoomContainer';

const Stack = createStackNavigator<MainTabParamList>();
const TopNavigation = createMaterialTopTabNavigator<MainTabParamList>();

const HomeTopNavigation = () => {
  return (
    <TopNavigation.Navigator
      initialRouteName="Chats"
      tabBarOptions={{
        activeTintColor: Colors.header.fontColor,
        style: {backgroundColor: Colors.header.backgroundColor},
        indicatorStyle: {
          backgroundColor: Colors.header.indicatorColor,
          height: 4,
        },
        labelStyle: {
          fontWeight: 'bold',
          fontSize: Fonts.size.regular,
        },
        showIcon: true,
      }}>
      <TopNavigation.Screen
        name="Camera"
        component={Home}
        options={{
          tabBarIcon: () => (
            <FontistoIcon
              name="camera"
              color={Colors.header.iconColor}
              size={18}
              style={{bottom: -5}}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <TopNavigation.Screen name="Chats" component={ChatScreenContainer} />
      <TopNavigation.Screen name="Status" component={Login} />
      <TopNavigation.Screen name="Calls" component={Home} />
    </TopNavigation.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.header.backgroundColor,
            shadowOpacity: 0,
            elevation: 0,
          },
          headerTintColor: Colors.header.fontColor,
          headerTitleAlign: 'left',
        }}>
        <Stack.Screen
          name="Home"
          options={{
            title: 'Seguro',
            headerRight: () => (
              <View style={styles.HeaderIconContainer}>
                <OcticonIcon
                  name="search"
                  size={20}
                  color={Colors.header.iconColor}
                />
                <Icon
                  name="dots-vertical"
                  size={20}
                  color={Colors.header.iconColor}
                />
              </View>
            ),
          }}
          component={HomeTopNavigation}
        />
        <Stack.Screen
          name="ChatRoom"
          component={ChatRoomContainer}
          options={{title: 'Chat Room'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
