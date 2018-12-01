import React from 'react'
import { View, StyleSheet } from 'react-native';

const Cardsection = (props) => {
    return (
        <View style={styles.containerStyle}>{props.children}</View>
    )
};

const styles = StyleSheet.create({
    containerStyle: {
        borderColor: '#ddd',
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        position: 'relative'
    }
})

export {Cardsection};