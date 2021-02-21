import React  from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import  AppLoading  from 'expo-app-loading';
import {
  useFonts,
  RobotoCondensed_300Light,
  RobotoCondensed_300Light_Italic,
  RobotoCondensed_400Regular,
  RobotoCondensed_400Regular_Italic,
  RobotoCondensed_700Bold,
  RobotoCondensed_700Bold_Italic
} from '@expo-google-fonts/roboto-condensed';
// import { globalStyles } from "./styles/globalStyles";
import  Home  from './routes/home';
export default function App() {
  const [loaded] = useFonts({
    RobotoCondensed_400Regular,
    RobotoCondensed_700Bold_Italic
  });
  
  if (!loaded) {
    return (
      <View>
        <ActivityIndicator size="small" color="#0000ff" />
        <AppLoading />

      </View>

    );
  }
  return (
      <Home/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  textStyle:{
    fontFamily: 'RobotoCondensed_400Regular',
    fontSize: 18
  }
});
