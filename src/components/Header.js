import React from 'react';
import {View} from 'react-native';

import {OurText} from './OurText';
import {getColors} from '../Colors';
import Styles from '../Styles';

const Header = props => {
  const colors = getColors();
  var {header} = Styles;

  return (
    <View style={{...header}}>
      <OurText style={{...colors.header, ...header}}>{props.children}</OurText>
    </View>
  );
};

// Make available to other components
export {Header};
