import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Superman extends Component {
  

  render() {
    return (
      <View style={styles.container}>
        <Text> Superman </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
    },
});