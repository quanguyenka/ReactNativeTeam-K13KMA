import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class SignIn extends Component {
    static navigationOptions = {
      title: 'Sign In',
      headerStyle: {
        backgroundColor: "#00ACC1",
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };

    state = {
        username: '',
        password: '',
    }

    navigateToSignSuccessPage = () => {
        if(this.state.username == "aa" && this.state.password == "aa") {
            this.props.navigation.navigate("SignSuccess");
            this.setState({username: ""});
            this.setState({password: ""})
        } else {
            alert("Username or password wrong");
        }
    }
    navigateToSignUpPage() {
        this.props.navigation.navigate("SignUp");
    }
    handlerUsername = (username) => {
        this.setState({username: username});
    }
    handlerPassword = (password) => {
        this.setState({password: password})
    }
    render() {
        return(
            <View style={styles.container}>
                <KeyboardAwareScrollView
                    style={{width: "100%", marginTop: 40, height: "60%"}}
                    resetScrollToCoords={{ x: 0, y: 0 }}
                    scrollEnabled={false}
                    contentContainerStyle={{}}
                >
                    <View style={styles.textInputWrapper}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Username"
                            placeholderTextColor="#85D7E1"
                            onChangeText ={this.handlerUsername.bind(this)}
                        />
                    </View>
                    <View style={styles.textInputWrapper}>
                        <TextInput
                            secureTextEntry={true}
                            style={styles.textInput}
                            placeholder="Password"
                            placeholderTextColor="#85D7E1"
                            onChangeText={this.handlerPassword.bind(this)}
                        />
                    </View>
                </KeyboardAwareScrollView>
                
                <View style={{height: "30%"}}>
                    <TouchableOpacity 
                        style={styles.signInButton}
                        onPress={this.navigateToSignSuccessPage.bind(this)}
                    >
                        <Text style={styles.signInButtonText}>
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{height: "13%"}}>
                    <Text 
                        style={styles.accountNotExist}
                        onPress={this.navigateToSignUpPage.bind(this)}
                    >
                        Don't have an account?
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00ACC1",
        width: "100%",
        height: "100%",
        position: "absolute",
        flexDirection: "column",
        alignContent: "center"
    },
    textInputWrapper: {
        margin: 20,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        width: "80%",
        borderBottomWidth: 2,
        borderBottomColor: "#85D7E1",
        fontSize: 20
    },
    signInButton: {
        padding: 15,
        borderColor: "#00A0B3",
        borderWidth: 1,
        width: 250,
        alignItems: "center",
        borderRadius: 40,
        backgroundColor: "#00A0B3",
        shadowColor: "gray",
        marginTop: 20,       
    },
    signInButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    accountNotExist: {
        textTransform: "uppercase",
        fontSize: 18,
        color: "#fff",
        marginBottom: 30,
        marginTop: 40
    },
});