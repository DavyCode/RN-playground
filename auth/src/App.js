/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase'
import { 
	API_KEY,
	AUTH_DOMAIN,
	DATABASE_URL,
	PROJECT_ID,
	STORAGE_BUCKET,
	MESSAGING_SENDER_ID
 } from 'react-native-dotenv'
import { Header, Button, Cardsection, Spinner } from './components/common'
import Loginform from './components/auth/Loginform'

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { isLoggedIn: null };
	}
	componentWillMount() {
		console.log(API_KEY)
		// Initialize Firebase
		firebase.initializeApp({
			apiKey: API_KEY,
			authDomain: AUTH_DOMAIN,
			databaseURL: DATABASE_URL,
			projectId: PROJECT_ID,
			storageBucket: STORAGE_BUCKET,
			messagingSenderId: MESSAGING_SENDER_ID
		});

		firebase.auth().onAuthStateChanged((user) => {
			if(user) {
				this.setState(() => ({ isLoggedIn: true }));
			} else {
				this.setState(() => ({ isLoggedIn: false}));
			}
		})
	}
	renderContent () {
		switch (this.state.isLoggedIn) {
			case true : 
				return ( 
					<Cardsection>
						<Button 
							onPress={() => {firebase.auth().signOut()}}
						>
							Log out 
						</Button>
					</Cardsection>)
			case false:
				return 	<Loginform />
			default: 
				return (
					<Cardsection>
						<Spinner />
					</Cardsection>)
		}
	}
	render() {
		console.log({State: this.state})
		return (
			<View>
				<Header headerText="Auth" />
				{this.renderContent()}
			</View>
		);
	}
};

