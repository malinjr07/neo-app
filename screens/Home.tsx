import {ScrollView, View, Text, Button} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import About from './About';

const Tab = createBottomTabNavigator();

type navTypes = {
  component: (e: any) => JSX.Element;
  componentName: string;
  tabType: 'text' | 'icon';
  tabValue: string;
}[];

const navigations: navTypes = [
  {
    component: About,
    componentName: 'About',
    tabType: 'text',
    tabValue: 'dj baharul',
  },
  {
    component: Profile,
    componentName: 'Profile',
    tabType: 'text',
    tabValue: 'dj baharul',
  },
];

const Home = ({navigation}: any) => {
  return (
    <Tab.Navigator>
      {navigations.map((value: any, id: any) => (
        <Tab.Screen
          key={id}
          name={value.componentName}
          options={{
            title: value.tabValue,
          }}
          component={value.component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default Home;
