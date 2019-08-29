import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Button, TouchableHighlight } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignIn from './components/SignIn.js';
import SignUp from './components/SignUp.js';

class App extends Component {
  navigateToSignIn() {
    this.props.navigation.navigate("SignIn");
  }
  navigateToSignUp() {
    this.props.navigation.navigate("SignUp");
  }
  render() {
    return(
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={require('./images/logo3.png')}
        />
        <TouchableHighlight
          onPress={this.navigateToSignIn.bind(this)}
          style={styles.buttonSignInWrapper}
          underlayColor='#fff'>
            <Text style={styles.textInSignInButton}>
              Sign In
            </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.navigateToSignUp.bind(this)}
          style={styles.buttonSignUpWrapper}
          underlayColor='#fff'>
            <Text style={styles.textInSignUpButton}>
              Sign Up
            </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    App: App,
    SignIn: SignIn,
    SignUp: SignUp
  },
  {
    initialRoute: "App",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#00ACC1"
      }
    }
  }
)

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00ACC1",
  },
  backgroundImage: {
    width: 210,
    height: 230
  },
  buttonSignInWrapper: {
    width: 250,
    padding: 15,
    backgroundColor:'#fff',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
    margin: 20
  },
  textInSignInButton: {    
    color: "#00A0B3", 
    textTransform: "uppercase",
    fontWeight: "bold"
  },
  buttonSignUpWrapper:{
    width: 250,
    padding: 15,
    backgroundColor:'#00A0B3',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: "center",
    alignItems: "center"
  },
  textInSignUpButton: {
    color: "#FFF", 
    textTransform: "uppercase",
    fontWeight: "bold"
  },
})