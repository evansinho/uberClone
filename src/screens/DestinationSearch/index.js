import React, {useState, useEffect} from 'react';
import styles from './styles';
import {View, SafeAreaView} from 'react-native';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  // const navigation = useNavigation();

  const checkNavigation = () => {
    if (originPlace && destinationPlace) {
      // navigation.navigate('SearchResults', {
      //   originPlace,
      //   destinationPlace,
      // });
      console.log('rediect');
    }
  };

  useEffect(() => {
    checkNavigation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where To"
          autoFocus={false}
          fetchDetails={true}
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
            console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          query={{
            key: 'AIzaSyDbRnz1oJywLw4rJDD104DEqQDpQxXUkpQ',
            language: 'en',
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where To"
          autoFocus={false}
          fetchDetails={true}
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
            console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autocompleteContainer,
              top: 55,
            },
            separator: styles.separator,
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
