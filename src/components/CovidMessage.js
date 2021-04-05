import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2b80ff',
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    color: '#bed9ff',
    marginBottom: 10,
  },
  learnMore: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default CovidMessage;
