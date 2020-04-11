import React, { Component } from 'react';
import { Dimensions, StyleSheet, View, KeyboardAvoidingView, Image } from 'react-native';
import Myform from './Myform';

export default class Login extends Component {


  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logocontainer}>
            <Image 
                source={require('./images/logo2.png')}
                style={styles.logo}
            />
        </View>
        <View style={styles.form}>
            <Myform  />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        backgroundColor: '#007bb6',
    }, 
    logocontainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width:100,
        height: 100,
    },
    form: {
        flex: 1,
    },
 
});