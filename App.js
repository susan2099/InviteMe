/*import { StatusBar } from 'expo-status-bar';
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
      <View style={styles.searchInput}>
        <GooglePlacesInput
        currentView={currentView}
        updateCurrentView={updateCurrentView}
        setPotentialEvent={setPotentialEvent}
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
});*/
/*import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Dimensions } from 'react-native';
import Map from './client/Map';
import GooglePlacesInput from './client/GooglePlacesInput';
import { getUserLocation } from './client/helperFunctions/helperFunctions';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/routers';
import SideMenu from './client/SideMenu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreen = ({ navigation }) => {
  const [currentView, setCurrentView] = useState({ latitude: 0, longitude: 0 });
  const [userLocation, setUserLocation] = useState({ latitude: 0, longitude: 0 });
  const [potentialEvent, setPotentialEvent] = useState(false);

  const updateCurrentView = (location) => {
    setCurrentView({ latitude: location.latitude, longitude: location.longitude });
  };

  const resetView = async () => {
    setCurrentView({ latitude: userLocation.latitude, longitude: userLocation.longitude });
    setPotentialEvent(false);
  };

  useEffect(() => {
    getUserLocation((coords) => {
      setUserLocation({ latitude: coords.latitude, longitude: coords.longitude });
      updateCurrentView(coords);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Map
        potentialEvent={potentialEvent}
        currentView={currentView}
        userLocation={userLocation}
      />
      <View style={styles.resetButton}>
        <Button title="Reset" onPress={resetView} />
      </View>
      <View style={styles.searchInput}>
        <GooglePlacesInput
          currentView={currentView}
          updateCurrentView={updateCurrentView}
          setPotentialEvent={setPotentialEvent}
        />
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <SideMenu {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  resetButton: {
    position: 'absolute',
    right: 20,
    top: 100,
  },
  searchInput: {
    position: 'absolute',
    width: width,
  },
});

export default App;*/
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './client/HomeScreen';
import SideMenu from './client/SideMenu';
import LoginScreen from './client/LoginScreen';

// Create Drawer and Stack navigators
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
      <Drawer.Screen name="Feed" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

// Main App component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Map" component={MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;