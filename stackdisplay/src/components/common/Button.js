import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ onPress, children }) => {
    const {textStyle, buttonStyle} = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    textStyle : {
        alignSelf: 'center',
        color: '#007aff',
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 16,
        fontWeight: '600'
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
});

export {Button};
