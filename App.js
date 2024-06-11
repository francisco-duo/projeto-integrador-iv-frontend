import { useEffect, useState } from 'react';

import * as LocalAuthentication from "expo-local-authentication";

import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Home from './src/app/Home';
import Pacientes from './src/app/Pacientes';
import Acesso from './src/app/Acesso';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  async function verifyAvaiableAuthentication() {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    console.log(compatible);

    const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
    console.log(types.map(type => LocalAuthentication.AuthenticationType[type]));
  };

  async function handleAuthentication() {
    const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();

    if (!isBiometricEnrolled) {
      return Alert.alert("Login", "Nenhuma digital cadastrada!");
    };

    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Login com biometrica",
      fallbackLabel: "Biometrica não reconhecida",
    });

    setIsAuthenticated(auth.success);
  };

  useEffect(() => {
    verifyAvaiableAuthentication();
  }, []);

  return (
    <View style={styles.container}>
      <Acesso authFunction={handleAuthentication}/>
      {/* { isAuthenticated ? <Home /> : <Acesso /> } */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF725E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    backgroundColor: '#fff', // Set background color to white
    color: '#ff725e', // Set text color to #ff725e
    padding: 10, // Add padding for better visual appearance
    borderRadius: 5,
  }
});
