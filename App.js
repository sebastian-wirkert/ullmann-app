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

import AppHeader from './src/AppHeader';
import {getColors, isDarkMode} from './src/Colors';
import {Card} from './src/components';
import Styles from './src/Styles';

function bar() {
  const colors = getColors();
  return (
    <ScrollView>
      <AppHeader />
      <Card>
        <Text style={colors.text}>Hello babe how are you</Text>
      </Card>
    </ScrollView>
  );
}

function blasen() {
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

const App = () => {
  const colors = getColors();
  return (
    <SafeAreaView style={{...Styles.page, ...colors.page}}>
      <StatusBar barStyle={isDarkMode() ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="bar" component={bar} />
          <Tab.Screen name="blasen" component={blasen} />
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
