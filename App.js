import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
//import * as Location from 'expo-location';
import GooglePlacesInput from './client/GooglePlacesInput';
import Map from './client/Map.js'


export default function App() {

  const [currentView, setCurrentView] = useState({latitude:0, longitude:0});

  const handleUpdateCurrentView = (newCoords) => {
    setCurrentView(newCoords);
  }

  return (
    <View style= {styles.container}>
      <Map currentView={currentView} updateCurrentView={handleUpdateCurrentView} />
      <GooglePlacesInput/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});