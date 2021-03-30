/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import AppHeader from './src/AppHeader';
import AppView from './src/AppView';
import {getColors, isDarkMode} from './src/Colors';
import {Card} from './src/components';
import Styles from './src/Styles';

function bar() {
  const colors = getColors();
  return (
    <AppView>
      <ScrollView>
        <AppHeader />
        <Card>
          <Text style={colors.text}>Hello babe how are you</Text>
        </Card>
      </ScrollView>
    </AppView>
  );
}

function blasen() {
  // FontAwesome5 braille
  const colors = getColors();
  return (
    <ScrollView>
      <AppHeader />
      <Card>
        <Text style={colors.text}>Hello blasen how are you</Text>
      </Card>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();
function selectTabBarColor(colors, focused) {
  return focused ? colors.text.color : colors.container.backgroundColor;
}

const App = () => {
  const colors = getColors();
  return (
    <SafeAreaView style={{...Styles.page, ...colors.page}}>
      <StatusBar barStyle={isDarkMode() ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: colors.text.color,
            inactiveTintColor: colors.container.backgroundColor,
            activeBackgroundColor: colors.container.backgroundColor,
          }}>
          <Tab.Screen
            name="Einheiten"
            component={bar}
            options={{
              tabBarIcon: ({focused}) => {
                const color = selectTabBarColor(colors, focused);
                return (
                  <FontAwesomeIcon
                    name={'calculator'}
                    color={color}
                    size={22}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Leckrate"
            component={bar}
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
            component={blasen}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
