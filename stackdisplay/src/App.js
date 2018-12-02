/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer';
import {Header} from './components/common';
import LibraryList from './components/LibraryList'

const store = createStore(reducer);

const App = () => {
	return (
		<Provider store={store}>
			<View  style={{ flex: 1 }}>
				<Header headerText="Stack Display"/>
				<LibraryList />
			</View>
		</Provider>
	)
};

export default App;
