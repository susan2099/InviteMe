import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
//import * as Location from 'expo-location';
import GooglePlacesInput from './client/GooglePlacesInput';
import Map from './client/Map.js'
import { getUserLocation } from './client/helperFunctions/helperFunctions.js';


export default function App() {
  const [currentView, setCurrentView] = useState({ latitude: 0, longitude: 0 });
  const [userLocation, setUserLocation] = useState({ latitude: 0, longitude: 0 });

  const updateCurrentView = (location) => {
    setCurrentView({ latitude: location.latitude, longitude: location.longitude });
  };

  const resetView = async () => {
    setCurrentView({latitude: userLocation.latitude, longitude: userLocation.longitude});
  }

  useEffect(() => {
    getUserLocation((coords) => {
      setUserLocation({latitude: coords.latitude, longitude: coords.longitude});
      updateCurrentView(coords);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Map currentView={currentView} userLocation={userLocation} />
      <GooglePlacesInput currentView={currentView} updateCurrentView={updateCurrentView}/>
      <View>
        <Button title="click" onPress={resetView} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});