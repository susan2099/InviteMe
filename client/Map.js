import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

  const Map = ({ currentView, userLocation }) => {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          region={{
            latitude: currentView.latitude,
            longitude: currentView.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker
            coordinate={{ latitude: 37.78525, longitude: -122.4124 }}
            title={'Hello'}
            description={'World'}
            image={require('../marker.png')}
          >
          </Marker>
          <Marker
          coordinate={{ latitude : userLocation.latitude , longitude : userLocation.longitude }}
          title={'Hello'}
          description={'World'}
          image={require('../marker.png')}
        >
        </Marker>
        </MapView>
      </View>
    );
  };
export default Map;

  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });
  
