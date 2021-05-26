import React, {useState} from 'react';
import {View, TextInput, SafeAreaView, StyleSheet} from 'react-native';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const initialState = '';

const DestinationSearch = () => {
  const [fromText, setFromText] = useState(initialState);
  const [destinationText, setDestinationText] = useState(initialState);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="From"
          value={fromText}
          onChangeText={setFromText}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Where To"
          value={destinationText}
          onChangeText={setDestinationText}
        />

        <GooglePlacesAutocomplete
          placeholder="Search"
          autoFocus={false}
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyDbRnz1oJywLw4rJDD104DEqQDpQxXUkpQ',
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
  },
  textInput: {
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
  },
});

export default DestinationSearch;
