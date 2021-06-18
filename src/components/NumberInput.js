import React, {useState} from 'react';
import {TextInput} from 'react-native';

import {getColors} from '../Colors';
import styles from '../Styles';
import {decimalSeperator} from '../util/decimal';

const validNumber = decimalSeperator === '.' ? /^\d+\.?\d*$/ : /^\d+\,?\d*$/;

// Create a component
function NumberInput(props) {
  const colors = getColors();
  const {style} = props;

  const [inputValue, setInputValue] = useState('');

  return (
    <TextInput
      style={{
        color: colors.input.color,
        ...styles.input,
        ...style,
      }}
      keyboardType="numeric"
      placeholderTextColor={'gray'}
      placeholder={`1${decimalSeperator}0`}
      onChangeText={text =>
        validNumber.test(text) ? setInputValue(text) : setInputValue('')
      }
      value={inputValue}
      maxLength={10}
    />
  );
}

// Make available to other components
export {NumberInput};
