import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class SignSuccess extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Image
                    style={styles.successImage}
                    source={require('./../images/login_success3.png')}
                />
                <Text style={styles.successText}>
                    Success
                </Text>
                <TouchableHighlight style={styles.welcomeButton}>
                    <Text style={styles.welcomeText}>
                        Welcome
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#00ACC1",
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    successImage: {
        width: 200,
        height: 200
    },
    successText: {
        fontSize: 26,
        color: "#fff",
        marginTop: 50,
        marginBottom: 50        
    },
    welcomeButton: {
        width: 250,
        backgroundColor: "#FFF",
        borderRadius: 40, 
        alignItems: "center",
        padding: 10      
    }, 
    welcomeText: {
        color: "#00A0B3",
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold"
    }
});