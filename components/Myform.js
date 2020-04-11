import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default class Myform extends Component {

  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="Username" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} />
        <TouchableOpacity style={styles.loginbutton}>
            <Text style={styles.buttontext}> Login </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        paddingLeft: 15,
        marginBottom: 15,
        borderRadius: 18,
    },
    loginbutton: {
        backgroundColor: '#27ae60',
        paddingVertical: 15,
    },
    buttontext: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
    },
});