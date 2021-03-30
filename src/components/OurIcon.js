import React from 'react';

import {getColors} from '../Colors';

// Create a component
const OurIcon = props => {
  const colors = getColors();
  const {focused} = props;
  const color = focused ? colors.container.backgroundColor : 'gray';
  return <Ionicons name={'ios-list'} color={color} size={22} />;
};

// Make available to other components
export {OurIcon};
