import React from 'react';
import {Text} from 'react-native';

import {getColors} from '../Colors';
import styles from '../Styles';

// Create a component
const OurText = props => {
  const colors = getColors();
  const {style} = props;

  return (
    <Text style={{...colors.text, ...styles.text, ...style}}>
      {props.children}
    </Text>
  );
};

// Make available to other components
export {OurText};
