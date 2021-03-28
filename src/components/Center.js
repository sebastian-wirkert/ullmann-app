import React from 'react'
import { View } from 'react-native'

// Create a component
const Center = (props) => {
    const { viewStyle } = styles;

    return (
        <View style={{...viewStyle, ...props.style}}>
          {props.children}
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    }
};

// Make available to other components
export { Center };