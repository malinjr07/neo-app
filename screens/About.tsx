import {View, Text, Button, ScrollView} from 'react-native';
import React from 'react';

const About = ({navigation}: {navigation: any}) => {
  return (
    <ScrollView style={{flex: 1}}>
      <View>
        <Text style={{color: '#000000', fontSize: 20}}>Home</Text>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </ScrollView>
  );
};

export default About;
