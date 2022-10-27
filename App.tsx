/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import {StyleProvider} from 'react-native-zephyr';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '@screens/Home';
import Profile from '@screens/Profile';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <StyleProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </StyleProvider>
  );
};

export default App;
