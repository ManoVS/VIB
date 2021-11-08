import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';
import RegisterScreen from './RegisterScreen';

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <View>
        <SafeAreaView style={styles.adroidSafeArea} />
        <Header
          style={styles.header}
          centerComponent={{
            text: 'VIBGYOR App',
            style: { color: 'white', fontSize: '35' },
          }}>
          <View>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.registerButton}>
              <Text style={styles.loginText}>Register</Text>
            </TouchableOpacity>
          </View>
        </Header>
        <Image
          source = {{uri: 'https://data1.ibtimes.co.in/en/full/742846/vibgyor.png?w=1199&h=378&l=50&t=40'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginButton: {
    marginTop: 0,
    backgroundColor: 'green',
    height: 35,
    width: 70,
    borderWidth: 3,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: 'white',
    fontWeight: 'Bold',
  },
  registerButton: {
    marginTop: -35,
    marginLeft: 250,
    backgroundColor: 'green',
    height: 35,
    width: 70,
    borderWidth: 3,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  adroidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(0),
  },
  header: {
    height: 100,
  },
});
