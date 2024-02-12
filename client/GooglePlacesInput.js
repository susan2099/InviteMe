import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const { api_key } = require('../config.js');
import axios from 'axios';
import Constants from 'expo-constants';



const GooglePlacesInput = ({currentView, updateCurrentView, setPotentialEvent, setPotentialEventAddress}) => {
    return (
      <View style={styles.searchContainer}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          query={{
            key:api_key,
            language: 'en', // language of the results
          }}
          onPress={(data, details = null) => {
            setPotentialEventAddress(data.description);
            var location = data.description.split(' ').join('+')
            axios.get(`https://nominatim.openstreetmap.org/search?q=${location}&format=geojson`)
            .then((geoCode) => {
              let position = geoCode.data.features[0].geometry.coordinates;
              console.log('Latitude:', position[1]);
              console.log('Longitude:', position[0]);
              updateCurrentView({latitude: position[1], longitude: position[0]});
              setPotentialEvent(true)
            })
            .catch((err) => {
              console.log(err);
            })

          }}
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
      paddingTop: Constants.statusBarHeight - 20,
    },
  });