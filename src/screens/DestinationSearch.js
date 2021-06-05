import React, {useState} from 'react';
import {View, TextInput, SafeAreaView, StyleSheet} from 'react-native';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const initialState = '';

const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);
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
          placeholder="Where To"
          autoFocus={false}
          fetchDetails={true}
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
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
