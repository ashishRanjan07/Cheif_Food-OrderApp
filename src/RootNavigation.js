import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigation from './screens/loginScreen/AuthNavigation';

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
}
