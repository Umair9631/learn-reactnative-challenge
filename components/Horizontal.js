import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Dimensions } from "react-native";
export default class Horizontal extends Component {

  render() {
    return (
      <ScrollView 
      horizontal={true} 
      pagingEnabled={true} 
       style={styles.container}>
        <View style={styles.outer}>
            <Text style={styles.innertext}> Welcome to my App </Text>
        </View>
        <View style={[styles.outer, styles.outertwt]}>
            <Text style={styles.innertext}> This app is testing app </Text>
        </View>
        <View style={[styles.outer, styles.outerfb]}>
            <Text style={styles.innertext}> Available on iOS and Android </Text>
        </View>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {

    },
    outer: {
        flex: 1,
        backgroundColor: '#00aced',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innertext: {
        color: '#fff',
        fontSize: 20,
    },
    outertwt: {
        backgroundColor: '#007bb6',
    },
    outerfb: {
        backgroundColor: '#3d8eb9',
    },
});