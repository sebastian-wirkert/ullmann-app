import {StyleSheet} from 'react-native';

const standardFontSize = 16;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    padding: 10,
    //borderRadius: 10
  },
  input: {
    backgroundColor: 'white',
    fontSize: standardFontSize,
    flex: 2,
  },
  text: {
    fontSize: standardFontSize,
  },
  header: {
    padding: 10,
    fontSize: standardFontSize,
    fontWeight: 'bold',
  },
});

export default styles;
