import React, { useState } from "react";
import { Image, Text, Pressable, View, StyleSheet, Dimensions } from "react-native";

var screenSize = Dimensions.get('window');

const FriendItem = ({ item, eventInviteList, setEventInviteList }) => {
  const isFriendSelected = eventInviteList[item.id];

  const handleFriendPress = () => {
    setEventInviteList(prevList => {
      const updatedList = { ...prevList };
      if (isFriendSelected) {
        console.log(`Uninvited: ${item.title}`);
        delete updatedList[item.id];
      } else {
        console.log(`Invited: ${item.title}`);
        updatedList[item.id] = item.title;
      }
      console.log(updatedList);
      return updatedList;
    });
  };

  return (
    <Pressable onPress={handleFriendPress}>
      <View style={isFriendSelected ? styles.selected : styles.friend}>
        <Image
          source={require('../assets/defaultUser.png')}
          style={{ width: screenSize.width * .1, height: screenSize.height * .04, borderRadius: 50, marginRight: 20 }}
        />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  friend: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    flexDirection: 'row',
    width: screenSize.width * .6,
    height: screenSize.height * .06,
  },
  title: {
    fontSize: 20,
  },
  selected: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    flexDirection: 'row',
    width: screenSize.width * .6,
    height: screenSize.height * .06,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'blue'
  }
});

export default FriendItem;