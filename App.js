import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './client/HomeScreen';
import SideMenu from './client/SideMenu';
import LoginScreen from './client/LoginScreen';
import RegisterScreen from './client/RegisterScreen.js';
import axios from 'axios';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Create Drawer and Stack navigators
const Drawer = createDrawerNavigator();
function MyDrawer({friendsList, eventList, setEventList, userData}) {
  return (
    <Drawer.Navigator drawerContent={props => <SideMenu {...props} friendsList={friendsList} eventList={eventList} userData={userData} />}>
      <Drawer.Screen  name="Feed">
        {props => <HomeScreen {...props} friendsList={friendsList} eventList={eventList} setEventList={setEventList} userData={userData} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

// Main App component
export default function App() {
  const [userLocation, setUserLocation] = useState({latitude: 0, longitude: 0});
  const [friendsList, setFriendsList] = useState([]);

  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    axios.get(`http://10.0.2.2/userData`)
      .then((userData) => {
        setEventList(userData.data.eventList)
        setFriendsList(userData.data.friendsList)
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);

      })
  }, []);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
          <Stack.Screen name="Map">
            {props => <MyDrawer {...props} eventList={eventList} friendsList={friendsList} setEventList={setEventList} userData={props.route.params.userData}/>}
          </Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


// {props => console.log(props.route.params.userData)}
