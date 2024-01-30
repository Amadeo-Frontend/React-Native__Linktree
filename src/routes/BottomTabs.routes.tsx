import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import ContactScreen from '../screens/Contact/ContactScreen';
import PortfolioScreen from '../screens/Portfolio/PortfolioScreen';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../constants/Colors';

const Tab = createMaterialBottomTabNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor={colors.primary}
        inactiveColor={colors.secundary}
        barStyle={{ backgroundColor: colors.tertiary }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="home" size={24} color={colors.accent} />
            ),
          }}
        />
        <Tab.Screen
          name="Portfolio"
          component={PortfolioScreen}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="art-track" size={24} color={colors.accent} />
            ),
          }}
        />
        <Tab.Screen
          name="Contato"
          component={ContactScreen}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="contacts" size={24} color={colors.accent} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
