import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Dimensions } from 'react-native';
import GooglePlacesInput from './GooglePlacesInput';
import Map from './Map';
import { getUserLocation } from './helperFunctions/helperFunctions';
import { DrawerActions } from '@react-navigation/native';
import { Icon } from '@rneui/themed';

export default function HomeScreen({navigation, friendsList, eventList, setEventList}) {
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
        eventList={eventList}
        friendsList={friendsList}
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

