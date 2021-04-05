import React from 'react';
import HomeMap from '../components/HomeMap';
import CovidMessage from '../components/CovidMessage';
import {View} from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <HomeMap />
      <CovidMessage />
    </View>
  );
};

export default HomeScreen;
