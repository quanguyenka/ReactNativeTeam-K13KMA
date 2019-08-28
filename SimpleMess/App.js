import React, {Component} from 'react';
import {View,Text, Image, StyleSheet} from 'react-native';

export default class App extends Component {
  render() {
    return(
      <View style={styles.appBackground}>
        <Image
          style={styles.logoImg}
          source={require('./images/LogoMark.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appBackground: {
    backgroundColor: "#00ACC1",
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center"
  },
  logoImg: {
    width: 300,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  }
});