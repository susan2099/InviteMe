import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
//import * as Location from 'expo-location';
import GooglePlacesInput from './client/GooglePlacesInput';
import Map from './client/Map.js'
import { getUserLocation } from './client/helperFunctions/helperFunctions.js';


export default function App() {
  const [currentView, setCurrentView] = useState({ latitude: 0, longitude: 0 });
  const [userLocation, setUserLocation] = useState({ latitude: 0, longitude: 0 });
  const [potentialEvent, setPotentialEvent] = useState(false)

  const updateCurrentView = (location) => {
    setCurrentView({ latitude: location.latitude, longitude: location.longitude });
  };

  const resetView = async () => {
    setCurrentView({latitude: userLocation.latitude, longitude: userLocation.longitude});
    setPotentialEvent(false);
  }

  useEffect(() => {
    getUserLocation((coords) => {
      setUserLocation({latitude: coords.latitude, longitude: coords.longitude});
      updateCurrentView(coords);
    });
  }, []);

  return (
    <View style={styles.constainer}>
      <Map
      potentialEvent={potentialEvent}
      currentView={currentView}
      userLocation={userLocation}/>
      <View style={styles.resetButton}>
        <Button
          title='Reset'
          onPress={resetView}
        />
      </View>
      
    </View>
  );
};

var width = Dimensions.get('window').width

const styles = StyleSheet.create({
  constainer: {
    ...StyleSheet.absoluteFillObject,
  },
  resetButton: {
    position: 'absolute',
    right: 20,
    top: 100
  },
  searchInput: {
    position: 'absolute',
    width: width
  }
});