import React, { Component } from 'react';
import { StyleSheet ,View, Text } from 'react-native';

export default class Green extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text> Green </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        backgroundColor: 'green' ,
    },
});