import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/app/Home';
import Pacientes from './src/app/Pacientes';
import Acesso from './src/app/Acesso';

export default function App() {
  return (
    <Acesso/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
