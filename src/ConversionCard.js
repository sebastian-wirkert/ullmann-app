import React from 'react';
import {View} from 'react-native';

import {Card, Header} from './components';
import styles from './Styles';

const ConversionCard = props => {
  const {header} = props;
  return (
    <View style={{paddingBottom: 30}}>
      <Header style={{padding: 0, paddingLeft: styles.container.marginLeft}}>
        {header}
      </Header>
      <Card glue>{props.children}</Card>
    </View>
  );
};

export default ConversionCard;
