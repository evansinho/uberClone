import React, {useState} from 'react';
import styles from './styles';
import {View, TextInput, SafeAreaView} from 'react-native';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const initialState = '';

const DestinationSearch = () => {
  // const [originPlace, setOriginPlace] = useState(null);
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

export default DestinationSearch;
