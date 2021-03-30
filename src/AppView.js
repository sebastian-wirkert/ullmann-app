// Import library to create a component
import React from 'react';
import {View} from 'react-native';

import {getColors} from './Colors';
import Styles from './Styles';

// Create a component
const AppView = props => {
  const colors = getColors();
  var {page} = Styles;

  return (
    <View style={{...colors.page, ...page, ...props.style}}>
      {props.children}
    </View>
  );
};

// Make available to other components
export default AppView;
