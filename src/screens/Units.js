import React from 'react';
import {ScrollView, Text} from 'react-native';

import AppHeader from '../AppHeader';
import AppView from '../AppView';
import {getColors} from '../Colors';
import {Card} from '../components';

function Units(props) {
  const colors = getColors();
  return (
    <AppView>
      <ScrollView>
        <AppHeader />
        <Card>
          <Text style={colors.text}>Hello babe how are you</Text>
        </Card>
      </ScrollView>
    </AppView>
  );
}

export default Units;
