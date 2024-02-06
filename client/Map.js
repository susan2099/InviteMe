import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const Map = () => {

    const [userLocation, setUserLocation] = useState({latitude: 0, longitude:0});

    useEffect(() => {
        (async () => {
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setUserLocation({latitude: location.coords.latitude, longitude: location.coords.longitude})
        })();
    }, []);

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                showsUserLocation={true}
                region={{
                    latitude: userLocation.latitude,
                    longitude: userLocation.longitude,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.0121,
                }}
                onMapReady={this.onMapLayout}
            >
                <Marker
                    coordinate={{ latitude : userLocation.latitude , longitude : userLocation.longitude}}
                    title={'Hello'}
                    description={'World'}
                    image={require('../marker.png')}
                > 
                </Marker>
                {console.log(userLocation)}
            </MapView>
        </View>
    );
}

export default Map;

/*const styles = StyleSheet.create({
  constainer: {
    ...StyleSheet.absoluteFillObject,
  },
});*/
const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 900,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });
