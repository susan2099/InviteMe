import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, Dimensions } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import EventModal from './EventModal.js'

  const Map = ({ currentView, userLocation, potentialEvent, potentialEventAddress, addNewEvent, setPotentialEvent, friendsList, eventList }) => {

    const [eventModalVisible, setEventModalVisible] = useState(false);
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
            image={require('../assets/marker.png')}
          >
          </Marker>
          <Marker
          coordinate={{ latitude : userLocation.latitude , longitude : userLocation.longitude }}
          title={'Hello'}
          description={'World'}
          image={require('../assets/marker.png')}
        >
        </Marker>
        {
          potentialEvent?
          <Marker
            coordinate={{ latitude : currentView.latitude , longitude: currentView.longitude }}
            // title={'Event'}
            // description={'Test'}
            onPress={() => setEventModalVisible(true)}
          >
            <Image
              source={require('../assets/potentialEvent.png')}
              style={{width: 30, height: 50}}
            />
          </Marker>
          : null
        }
        {
          eventList.map((event, index) => {
            return (
              <Marker
                key={index}
                coordinate={event.coordinates}
                title={`${event.date}`}
                description={
                  `Address: ${event.address}`
                }
              >
                <Image
                  source={require('../assets/eventMarker.png')}
                  style={{width: 40, height: 60}}
                />
              <Callout style={{width: screenSize.width * .6}}>
                <Text style={{ fontWeight: 'bold' }} >
                  {`Title: ${event.title}`}
                </Text>
                <Text>
                  {`Address: ${event.address}`}
                </Text>
                <Text>
                  {`Date/Time: ${event.date}`}
                </Text>
              </Callout>
              </Marker>
            )
          })
        }
        {
          friendsList.map((friend) => {
            return (
              <Marker
                key={friend.id}
                coordinate={friend.coordinates}
                title={friend.title}
                description={friend.status}
              >
                <Image
                  source={require('../assets/defaultUser.png')}
                  style={{width: 35, height: 35, borderRadius: 50, borderColor: 'black', borderWidth: 2}}
                />
                {/* <Callout style={{width: screenSize.width * .6}}>
                  <Text style={{ fontWeight: 'bold' }} >
                    {`Title: ${event.title}`}
                  </Text>
                  <Text>
                    {`Address: ${event.address}`}
                  </Text>
                  <Text>
                    {`Date/Time: ${event.date}`}
                  </Text>
                </Callout> */}
              </Marker>
            )
          })
        }
        
        </MapView>
        <EventModal
        eventModalVisible={eventModalVisible}
        setEventModalVisible={setEventModalVisible}
        potentialEventAddress={potentialEventAddress}
        addNewEvent={addNewEvent}
        setPotentialEvent={setPotentialEvent}
        currentView={currentView}
        friendsList={friendsList}
      />
      </View>
    );
  };
export default Map;
var screenSize = Dimensions.get('window');

  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });
  
