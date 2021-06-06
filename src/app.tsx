import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Navigator from './tools';
import Reanimated2 from './tools/reanimated2';
import {ThemeProvider} from './context/theme';
import {theme} from './constants/design';
import {ROUTES} from './constants/routes';

const Stack = createStackNavigator();

export const App = () => (
  <ThemeProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Navigator'}>
        <Stack.Screen name="Navigator" component={Navigator} />
        <Stack.Screen name={ROUTES.reanimated} component={Reanimated2} />
      </Stack.Navigator>
    </NavigationContainer>
  </ThemeProvider>
);
