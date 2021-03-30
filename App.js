/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import BottomNavigator from './src/BottomNavigator';
import {getColors, isDarkMode} from './src/Colors';
import Styles from './src/Styles';

const App = () => {
  const colors = getColors();
  return (
    <SafeAreaView style={{...Styles.page, ...colors.page}}>
      <StatusBar barStyle={isDarkMode() ? 'light-content' : 'dark-content'} />
      <BottomNavigator />
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
