import React, {useState} from 'react';
import {ScrollView, TextInput} from 'react-native';

import {NumberInput, OurText} from '../components';
import AppHeader from '../AppHeader';
import AppView from '../AppView';
import ConversionCard from '../ConversionCard';

function Units(props) {
  const [pascalValue, setPascalValue] = useState('');
  const [barValue, setBarValue] = useState('');

  const [mmValue, setMMValue] = useState('');
  const [inchValue, setInchValue] = useState('');

  return (
    <AppView>
      <ScrollView>
        <AppHeader />
        <ConversionCard header={'Pascal/Bar'}>
          <OurText>pascal</OurText>
          <NumberInput value={pascalValue} setValue={setPascalValue} />
          <OurText>bar</OurText>
          <NumberInput value={barValue} setValue={setBarValue} />
        </ConversionCard>
        <ConversionCard header={'mm/inch Wassersäule'}>
          <OurText>mm</OurText>
          <NumberInput value={mmValue} setValue={setMMValue} />
          <OurText>inch</OurText>
          <NumberInput value={inchValue} setValue={setInchValue} />
        </ConversionCard>
      </ScrollView>
    </AppView>
  );
}

export default Units;
