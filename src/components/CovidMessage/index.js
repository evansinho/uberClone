import React from 'react';
import styles from './styles';
import {Text, View} from 'react-native';

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel Only When Necessary</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui et numquam
        pariatur iure, unde sapiente, esse soluta explicabo dolorem deserunt
        dolore aperiam voluptates molestias quaerat saepe sed neque repellendus
        laborum?
      </Text>
      <Text style={styles.learnMore}>Learn More</Text>
    </View>
  );
};

export default CovidMessage;
