import {ScrollView, View, Text, Button} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import About from './About';

const Tab = createBottomTabNavigator();

const Home = ({navigation}: any) => {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
        }}>
        <View style={{flex: 1}}>
          <Text style={{color: '#000000', fontSize: 20}}>Home</Text>
          <Button
            title="Go to Profile"
            onPress={() => navigation.navigate('Profile')}
          />
        </View>

        <Tab.Navigator>
          <Tab.Screen name="About" component={About} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </View>
    </ScrollView>
  );
};

export default Home;
