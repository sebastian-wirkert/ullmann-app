
import {
  StyleSheet,
  useColorScheme
} from 'react-native';

const darkStyles = StyleSheet.create({
  page: {
    backgroundColor: '#000000'
  },
  container: {
    backgroundColor: '#03488B'
  },
  text: {
    color: '#FFFFFF'
  }
});

const lightStyles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF'
  },
  container: {
    backgroundColor: '#03488B'
  },
  text: {
    color: '#FFFFFF'
  }
});

function isDarkMode() {
  return useColorScheme() === 'dark'
}

function getColors() {
  if (isDarkMode())
    return darkStyles
  return lightStyles
}

export {getColors, isDarkMode}