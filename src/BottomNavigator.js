import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import {getColors} from './Colors';
import Bubbles from './screens/Bubbles';
import Leakage from './screens/Leakage';
import Units from './screens/Units';

const Tab = createBottomTabNavigator();
function selectTabBarColor(colors, focused) {
  return focused ? colors.text.color : colors.container.backgroundColor;
}

const BottomNavigator = () => {
  const colors = getColors();
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: colors.text.color,
          inactiveTintColor: colors.container.backgroundColor,
          activeBackgroundColor: colors.container.backgroundColor,
        }}>
        <Tab.Screen
          name="Einheiten"
          component={Units}
          options={{
            tabBarIcon: ({focused}) => {
              const color = selectTabBarColor(colors, focused);
              return (
                <FontAwesomeIcon name={'calculator'} color={color} size={22} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Leckrate"
          component={Leakage}
          options={{
            tabBarIcon: ({focused}) => {
              const color = selectTabBarColor(colors, focused);
              return (
                <MaterialIcon name={'pipe-leak'} color={color} size={22} />
              );
            },
          }}
        />
        <Tab.Screen
          name="Blasenfrequenz"
          component={Bubbles}
          options={{
            tabBarIcon: ({focused}) => {
              const color = selectTabBarColor(colors, focused);
              return (
                <FontAwesome5Icon name={'braille'} color={color} size={22} />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigator;
