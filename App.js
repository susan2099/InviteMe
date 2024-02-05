import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
//import GetLocation, {Location, LocationErrorCode, isLocationError} from 'react-native-get-location';
//import RNLocation from 'react-native-location';
//import Geolocation from '@react-native-community/geolocation';


export default function App() {

  const [userLocation, setUserLocation] = useState({latitude: null, longitude:null});
  const [errorMsg, setErrorMsg] = useState(null);

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
     >
       <Marker
        coordinate={{ latitude : userLocation.latitude , longitude : userLocation.longitude}}
        title={'Hello'}
        description={'World'}
        image={require('./marker.png')}
      >
      </Marker>
      {console.log(userLocation)}
     </MapView>
    </View>
  );
}


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