import React from 'react';
import {ScrollView, TextInput} from 'react-native';

import {NumberInput, OurText} from '../components';
import AppHeader from '../AppHeader';
import AppView from '../AppView';
import {getColors} from '../Colors';
import ConversionCard from '../ConversionCard';
import styles from '../Styles';

function Units(props) {
  const colors = getColors();
  return (
    <AppView>
      <ScrollView>
        <AppHeader />
        <ConversionCard header={'Pascal/Bar'}>
          <OurText>Hello babe how are you</OurText>
          <NumberInput
            style={{
              color: colors.input.color,
              ...styles.input,
            }}
            placeholderTextColor={'gray'}
          />
        </ConversionCard>
        <ConversionCard header={'mm/inch Wassersäule'}>
          <OurText>Hello babe how are you</OurText>
        </ConversionCard>
      </ScrollView>
    </AppView>
  );
}

export default Units;
