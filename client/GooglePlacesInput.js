import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {api_key} from '../config.js';
import Constants from 'expo-constants';

const GooglePlacesInput = () => {
    return (
      <View style={styles.searchContainer}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          query={{
            key: api_key,
            language: 'en', // language of the results
          }}
          onPress={(data, details = null) => console.log(data)}
          onFail={(error) => console.error(error)}
          styles={{
            textInputContainer: {
            },
            textInput: {
              height: 38,
              fontSize: 16,
            },
          }}
        />
      </View>
    );
  };
  
  export default GooglePlacesInput;
  
  const styles = StyleSheet.create({
    searchContainer: {
      flex: 1,
      padding: 10,
      paddingTop: Constants.statusBarHeight + 10,
    },
  });