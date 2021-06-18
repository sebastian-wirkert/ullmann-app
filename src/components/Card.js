// Import library to create a component
import React from 'react';
import {View} from 'react-native';

import {getColors} from '../Colors';
import Styles from '../Styles';

// Create a component
const Card = props => {
  const colors = getColors();
  var container = {...Styles.container};

  if (props.glue) container.marginTop = 0;
  else container.marginTop = 15;

  return (
    <View style={{...colors.container, ...container, ...props.style}}>
      {props.children}
    </View>
  );
};

// Make available to other components
export {Card};
