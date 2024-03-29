import * as Location from 'expo-location';

export const getUserLocation = async (callback) => {
  try {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.error('Permission to access location was denied');
      return;
    }

    const location = await Location.getCurrentPositionAsync({});

    callback(location.coords);
  } catch (error) {
    console.error('Error fetching user location:', error);
  }
};
