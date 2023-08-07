import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/Contexts/Auth';
import Routes from './src/Routes/index';

export default function App(){
  return(
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='#f0f4ff' style='dark' />
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  )
} 