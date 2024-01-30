import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import ContactScreen from '../screens/Contact/ContactScreen';
import PortfoloScreen from '../screens/Portfolio/PortfolioScreen';

const Tab = createMaterialBottomTabNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#333"
        barStyle={{ backgroundColor: '#101010' }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Portfolio" component={PortfoloScreen} />
        <Tab.Screen name="Contato" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
