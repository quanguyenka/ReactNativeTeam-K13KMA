import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class SignUp extends Component {
    static navigationOptions = {
        title: 'Sign Up',
        headerStyle: {
            backgroundColor: "#00ACC1",
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    render() {
        return (
            <View style={styles.container}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Username"
                        placeholderTextColor="#85D7E1"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        placeholderTextColor="#85D7E1"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Password"
                        placeholderTextColor="#85D7E1"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Password again"
                        placeholderTextColor="#85D7E1"
                    />

                <View style={{ height: "30%" }}>
                    <TouchableHighlight style={styles.signUpButton}>
                        <Text style={styles.signUpButtonText}>
                            Sign Up
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.accountNotExistWrapper}>
                    <Text style={styles.accountNotExist}>
                    BE SIGNING UP I AGREE TO THE 
                            THERME OF USE
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
        padding: 5,
        borderColor: 'gray',
        width: "80%",
        borderBottomWidth: 2,
        borderBottomColor: "#85D7E1",
        fontSize: 20,
        margin: 10
    },
    signUpButton: {
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
    signUpButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    accountNotExistWrapper: {
        marginBottom: 30,
    },
    accountNotExist: {
        textTransform: "uppercase",
        fontSize: 16,
        color: "#fff",
    },
});