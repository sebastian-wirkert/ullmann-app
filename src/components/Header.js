import React from 'react';
import {View} from 'react-native';

import {OurText} from './OurText';
import {getColors} from '../Colors';
import Styles from '../Styles';

const Header = props => {
  const colors = getColors();
  var {header} = Styles;

  return (
    <OurText style={{...colors.header, ...header, ...props.style}}>
      {props.children}
    </OurText>
  );
};

// Make available to other components
export {Header};
