import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import GooglePlacesInput from './client/GooglePlacesInput';
import Map from './client/Map.js'


export default function App() {

  const [currentView, setCurrentView] = useState({latitude:0, longitude:0});

  const updateCurrentView = (location) => {
    setCurrentView({latitude:location.latitude, longitude:location.longitude});
  }

  return (
    <View style= {styles.container}>
      <Map> currentView={currentView} updateCurrentView={updateCurrentView}</Map>
      <GooglePlacesInput/>
    </View>
  );
};


const styles = StyleSheet.create({
  constainer: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

 //step 1:
{/* <MapView
  style={styles.map}
  region={{
    latitude: 37.78525,
    longitude: -122.4124,
    latitudeDelta: 0.05,
    longitudeDelta: 0.0121,
}}
>
</MapView> */}

//step 2:
//create marker
{/* <Marker
coordinate={{ latitude : 37.78525 , longitude : -122.4124 }}
title={'Hello'}
description={'World'}
>

</Marker> */}

//step 3:
//marker draggable
{/* <Marker draggable
coordinate={{ latitude : 37.78525 , longitude : -122.4124 }}
title={'Hello'}
description={'World'}
>
</Marker> */}

//step 4:
//marker image update
{/* <Marker draggable
coordinate={{ latitude : 37.78525 , longitude : -122.4124 }}
title={'Hello'}
description={'World'}
image={require('./marker.png')}
>
</Marker> */}

//step 5:
//show user location
{/* <MapView
  style={styles.map}
  showsUserLocation={true}
  region={{
    latitude: 37.78525,
    longitude: -122.4124,
    latitudeDelta: 0.05,
    longitudeDelta: 0.0121,
  }}
>
  <Marker
    coordinate={{ latitude : 37.78525 , longitude : -122.4124 }}
    title={'Hello'}
    description={'World'}
    image={require('./marker.png')}
  >
  </Marker>
</MapView> */}