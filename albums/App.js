import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import Albumlist from './src/components/Albumlist'

const App = () => {
    return (
        <View style={{flex: 1}}>
            <Header headerText={'Albums'}/>
            <Albumlist />
        </View>
    )
};

export default App;
