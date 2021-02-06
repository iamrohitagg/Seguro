import * as React from 'react'
import Home from './Home'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from './Types/types'
import Login from './Login'
import Colors from './Themes/Colors'
import { View, Text } from 'react-native'
import { Octicons } from 'react-native-vector-icons'

const Stack = createStackNavigator<RootStackParamList>()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.header.backgroundColor,
                },
                headerTintColor: Colors.header.fontColor,
                headerTitleAlign: 'left',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}>
                <Stack.Screen name='Home' options={{
                    title: 'Seguro', headerRight: (props) => {
                        <View>
                            <Text>rohit</Text>
                        </View>
                    }
                }} component={Home} />
                <Stack.Screen name='Login' component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation