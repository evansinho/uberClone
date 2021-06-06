import React from 'react';
import HomeMap from '../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../components/HomeSearch';
import {View} from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <HomeMap />
      <CovidMessage />
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
