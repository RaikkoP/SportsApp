import React from 'react';
import Frontpage from './src/Screens/FrontPage';
import History from './src/Screens/History';
import Menu from './src/Screens/Menu';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tracker" component={Frontpage} options={{headerShown: false}}/>
        <Stack.Screen name="History" component={History} options={{headerShown: false}}/>
        <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
