import React from 'react';
import HomeMap from '../../components/HomeMap/index';
import CovidMessage from '../../components/CovidMessage/index';
import HomeSearch from '../../components/HomeSearch/index';
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
