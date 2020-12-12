import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, View } from 'react-native';
import  AddDeck from './components/AddDeck'
import  Decks from './components/Decks'
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from './reducers';

// const store = createStore(reducer)

export default function App() {
  return (
    <Provider store={createStore(reducer)}>

    <View style={styles.container}>
      <StatusBar style="auto" />
      <Decks/>
      <AddDeck/>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
