/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
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
import { BotonPersonalizado } from './src/components/BotonPersonalizado';
const App = () => {
  const [contador, setContador] = useState(0);
  return (
    <SafeAreaView style={estilo.contenedor}>
      <Text style={estilo.texto}>Contador {contador}</Text>
      
      <BotonPersonalizado 
        texto='Incrementar' 
        color="#00B4DB"
        accion={()=>{setContador(contador+1)}}
      />

      <BotonPersonalizado 
        texto='Decrementar' 
        color="#9FD91D" 
        accion={()=>{setContador(contador-1)}}
      />

      <BotonPersonalizado 
        texto='Reset' 
        color="#323E48" 
        accion={()=>{setContador(0)}}
      />

    </SafeAreaView>
  )
}
const estilo = StyleSheet.create({
  contenedor:{
    flex:1,
    alignItems: "center"
  },
  texto:{
    fontSize:28
  }
});
export default App;
