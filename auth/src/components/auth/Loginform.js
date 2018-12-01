import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native';
import firebase from 'firebase'
import { Button, Card, Cardsection, Inputfield, Spinner } from '../common'

class Loginform extends Component {
	constructor(props) {
		super(props);
		this.state = { email: '', password: '', error: '', loading: false };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.onLoginSuccess = this.onLoginSuccess.bind(this);
	}
	handleSubmit () {
		const {email, password} = this.state;
		this.setState((prevState) => ({ error: '', loading: !prevState.loading }));

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess)
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess)
					.catch(error => { 
						this.setState((prevState) => ({error: 'Auth Failed!!!', loading: !prevState.loading}))
					});
			});
	}
	onLoginSuccess () {
		this.setState((prevState) => {
			return {
				email: '', 
				password: '',
				error: '', 
				loading: !prevState.loading 
			}
		});
	}
	renderButton () {
		if(this.state.loading){
			return <Spinner size='small'/>;
		}
		return (<Button onPress={this.handleSubmit}> Log in </Button>);
	}
	render () {
		return (
			<Card> 
				<Cardsection>
					<Inputfield
						value={this.state.email}
						onChangeText={(email) => this.setState({email})}
						placeholder="user@gmail.com"
						label='Email'
					/>
				</Cardsection>
				<Cardsection>
					<Inputfield
						value={this.state.password}
						onChangeText={(password) => this.setState({password})}
						placeholder="password"
						label='Password'
						secureTextEntry={true}
					/>
				</Cardsection>
				<Text style={styles.errorStyle}>
					{this.state.error}
				</Text>
				<Cardsection>
					{this.renderButton()}
				</Cardsection>
			</Card>
		);
	};
};

const styles = StyleSheet.create({
	errorStyle: {
		fontSize: 20,
		color: 'red',
		alignSelf: 'center'
	}
})

export default Loginform;
