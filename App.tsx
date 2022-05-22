/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  View,
} from 'react-native';
const App = () => {

  const saludo = () => {
    console.log("Hola esto es un saludo");
  }


  const estilos = StyleSheet.create({
    contenedor: {
      backgroundColor: "#fff",
      flex: 1,
    },
    textTitle: {
      fontSize: 34,
      color: "#FE3434"
    }
  });

  return (
    <View style = {estilos.contenedor}>
      <Text style = {estilos.textTitle}>Mi primer aplicación</Text>
      <Text>Mi nombre es Juan</Text>
      <Button 
        title=" Da click"
        color="grey"
        onPress={saludo}
      />
    </View>
  )
}

export default App;
