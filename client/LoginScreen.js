import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = () => {
    axios.post(`http://10.0.2.2:3000/login/`, { username, password })
      .then((response) => {
        console.log('in');
        navigation.navigate({ name: 'Map', params: { userData: response.data } });
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 401) {
            console.log('Invalid username or password. Please try again.');
          } else {
            console.log('An unexpected error occurred. Please try again later.');
          }
        } else {
          console.log('Network error. Please check your connection.');
        }
      });
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>InviteMe</Text>
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
        autoCapitalize='none'
        secureTextEntry={true}
      />
      {/* <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity> */}
      <Button title="LOGIN" onPress={loginUser}></Button>
      <Button title="SIGNUP" onPress={() => navigation.navigate('Register')}></Button>
    </View>
  )
}

export default LoginScreen;

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