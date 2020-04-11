/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Horizontal from './components/Horizontal'
import Superman from './components/Superman';
import Red from './components/Red';
import Blue from './components/Blue';
import Green from './components/Green';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './components/Login';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
