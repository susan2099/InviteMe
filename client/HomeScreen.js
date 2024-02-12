import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Dimensions } from 'react-native';
import GooglePlacesInput from './GooglePlacesInput';
import Map from './Map';
import { getUserLocation } from './helperFunctions/helperFunctions';
import { DrawerActions } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import axios from 'axios';
import {localIP} from '../config.js';

export default function HomeScreen({navigation, friendsList, eventList, setEventList, userData }) {
  console.log(userData)
  //const { userData } = route.params;
  //console.log(userData)
  const [currentView, setCurrentView] = useState({ latitude: 0, longitude: 0 });
  const [userLocation, setUserLocation] = useState({ latitude: 0, longitude: 0 });
  const [potentialEvent, setPotentialEvent] = useState(false);
  const [potentialEventAddress, setPotentialEventAddress] = useState('');

  //const [eventList, setEventList] = useState([]);

  const updateCurrentView = (location) => {
    setCurrentView({ latitude: location.latitude, longitude: location.longitude });
  };

  const resetView = async () => {
    setCurrentView({ latitude: userLocation.latitude, longitude: userLocation.longitude });
    setPotentialEvent(false);
  };

  const addNewEvent= (newEvent) => {

    axios.post(`http://10.0.2.2:3000/createEvent`, { event: {...newEvent, id: userData['_id'] }})
      .then((status) => {
        console.log(status.status)
      })
      .catch((err) => {
        console.log(err);
      })
    eventList.push(newEvent);
    setEventList(eventList)
  }
  useEffect(() => {
    getUserLocation((locations) => {
      setUserLocation({
        latitude: locations.latitude,
        longitude: locations.longitude
        
      });
      updateCurrentView(locations);
      axios.post(`http://10.0.2.2:3000/setUserLocation`, {userID: userData['_id'], coordinates: [location.coords.latitude, location.coords.longitude] })
        .then((status) => {
          console.log('User Location Updated', status.status);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, []);
  


  return (
    <View style={styles.container}>
      <Map
        potentialEvent={potentialEvent}
        currentView={currentView}
        userLocation={userLocation}
        potentialEventAddress={potentialEventAddress}
        setPotentialEvent={setPotentialEvent}
        addNewEvent={addNewEvent}
        eventList={userData.events}
        friendsList={userData.friends}
        userData={userData}
      />
      <View style={styles.resetButton}>
          <Icon
          name='navigation'
          reverse={true}
          size={18}
          onPress={resetView} />
          {/* <Button
          title='Reset'
          onPress={resetView}
        /> */}
      </View>
      <View style={styles.hambugerButton}>
      <Icon
          name='menu'
          reverse={true}
          size={18}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
      </View>
      <View style={styles.searchInput}>
        <GooglePlacesInput
          currentView={currentView}
          updateCurrentView={updateCurrentView}
          setPotentialEvent={setPotentialEvent}
          setPotentialEventAddress={setPotentialEventAddress}
        />
      </View>
    </View>
  );
};
var screenSize = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  resetButton: {
    position: 'absolute',
    right: 20,
    top: screenSize.height * .08,
  },
  searchInput: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
  hambugerButton: {
    position: 'absolute',
    left: 20,
    top: screenSize.height * .08
  },
});

