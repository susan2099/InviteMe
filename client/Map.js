import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const Map = ({currentView, updateCurrentView}) => {

    const [userLocation, setUserLocation] = useState({latitude: 0, longitude:0});
    
    useEffect(() => {
        const fetchUserLocation = async () => {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    console.error('Permission to access location was denied');
                    return;
                }

                let location = await Location.getCurrentPositionAsync({});
                setUserLocation({ latitude: location.coords.latitude, longitude: location.coords.longitude });

                if (updateCurrentView) {
                    updateCurrentView(location.coords);
                }
            } catch (error) {
                console.error('Error fetching user location:', error);
            }
        };

        fetchUserLocation();
    }, []);

    return (
        <View style={styles.container}>
            <MapView
                //style={{ width: 420, height: 870}}      
                style={styles.constainer}          
                showsUserLocation={true}
                region={{
                    latitude: currentView?.latitude || userLocation.latitude,
                    longitude: currentView?.longitude || userLocation.longitude,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.0121,
                }}
            >
                <Marker
                    coordinate={{ latitude : 37.78525, longitude : -122.4124}}
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
const styles = StyleSheet.create({
    constainer: {
      ...StyleSheet.absoluteFillObject,
      height:870,
      width:420,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
  });


/*const styles = StyleSheet.create({
  constainer: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});*/
/*const styles = StyleSheet.create({
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
   });*/
