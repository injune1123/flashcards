import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, View } from 'react-native';
import AddDeck from './components/AddDeck';
import AddCard from './components/AddCard';
import DeckOfCards from './components/DeckOfCards';
import Decks from './components/Decks';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from './reducers';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <StatusBar style="auto"/>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Decks} />
        <Stack.Screen name="AddDeck" component={AddDeck} />
        <Stack.Screen name="DeckOfCards" component={DeckOfCards} />
        <Stack.Screen name="AddCard" component={AddCard} />
        </Stack.Navigator>
      </NavigationContainer>
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
