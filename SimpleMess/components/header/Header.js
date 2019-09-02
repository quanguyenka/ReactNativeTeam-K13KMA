import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
const deviceWidth = Dimensions.get("window").width;

export class Logo extends Component {
    render() {
        return(
            <View style={{flex: 0.8}}>
                <Image
                    source={require('../../images/logo4.png')}
                    resizeMode = "contain"
                    style={{width: 140, marginTop: 15, alignSelf: 'center'}}
                />
            </View>
        );
    }
}

export class MenuButton extends Component {
    render() {
        return(
            <TouchableOpacity onPres = {this.props.onPres}>
                <Icon name="md-menu" size={30} style={{color: "#000", paddingLeft: 10}}></Icon>
            </TouchableOpacity>
        );
    }
}