import React from 'react'

import {OurText} from './OurText'

// Create a component
const Header = (props) => {
    const { textStyle } = styles;

    return (
        <OurText style={textStyle}>{props.children}</OurText>
    );
};

const styles = {
    textStyle: {
        fontWeight: 'bold',
        color: '#000000'
    }
};

// Make available to other components
export { Header };