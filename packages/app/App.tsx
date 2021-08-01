import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet,Text } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import Message from './components/Message';
import Home from './components/Users';
import {getWelcomeString} from 'common/src/main';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.sectionDescription}>{getWelcomeString("World")}</Text>
          <Message />
          <Home />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  }
});