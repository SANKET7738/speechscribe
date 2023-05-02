import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../components/HomeScreen';

const Stack = createStackNavigator()

function AuthStack() {

  return (
    <HomeScreen />
  )
}

export default AuthStack