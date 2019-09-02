import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MenuButton, Logo } from "./../header/Header.js";

export default class Chats extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: <MenuButton onPress={() => navigation.openDrawer()}/>,
            headerTitle: <Logo/>,
            headerBackTitle: "Home",
            headerLayoutPreset: "center"
        };
    };

    render() {
        return(
            <View style={StyleSheet.container}>
                <Text>
                    This is chats page
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
