import {DrawerLayoutAndroid, StyleSheet, useColorScheme} from 'react-native';

const darkStyles = StyleSheet.create({
  page: {
    backgroundColor: '#000000',
  },
  container: {
    backgroundColor: '#03488B',
  },
  text: {
    color: '#FFFFFF',
  },
  header: {
    color: '#FFFFFF',
  },
});

const lightStyles = StyleSheet.create({
  page: {
    backgroundColor: '#FAFAFA',
  },
  container: {
    backgroundColor: '#03488B',
  },
  text: {
    color: '#FFFFFF',
  },
  header: {
    color: '#000000',
  },
});

function isDarkMode() {
  return useColorScheme() === 'dark';
}

function getColors() {
  if (isDarkMode()) return darkStyles;
  return lightStyles;
}

export {getColors, isDarkMode};
