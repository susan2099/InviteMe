import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import axios from 'axios';
const { DB_IP } = require('../config.js');

const RegisterScreen = ({ navigation }) => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const navigateToLogin = async () => {
    try {
      const userData = await axios.post('http://10.0.2.2:3000/register/', { username, password });
      navigation.navigate('Map', { userData: userData.data });
    } catch (error) {
      console.error('Axios error:', error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
      <Text>Register</Text>
      <TextInput
        placeholder="Username..."
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        autoCapitalize='none'
      />
      <TextInput
        placeholder="Password..."
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        autoCapitalize='none'
      />
      <Button title="REGISTER" onPress={navigateToLogin}></Button>
    </View>
  )
}

export default RegisterScreen;

const styles = StyleSheet.create({
  input: {
    height: 30,
    width: 200,
    margin: 12,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});