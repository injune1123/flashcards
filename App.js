import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, View } from 'react-native';
import AddDeck from './components/AddDeck';
import AddCard from './components/AddCard';
import DeckOfCards from './components/DeckOfCards';
import Decks from './components/Decks';
import Home from './components/Home';
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from './reducers';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <StatusBar style="auto"/>
      <NavigationContainer>
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } if (route.name === 'Decks') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            }             
            else if (route.name === 'AddDeck') {
              iconName = focused 
                ? 'ios-albums' 
                : 'ios-albums';
            } else if (route.name === 'DeckOfCards') {
              iconName = focused 
                ? 'ios-browsers' 
                : 'ios-browsers';
            }  else if (route.name === 'AddCard') {
              iconName = focused 
                ? 'ios-add' 
                : 'ios-add';
            } 
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        >         
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Decks" component={Decks} />
          <Tab.Screen name="AddDeck" component={AddDeck} />
          <Tab.Screen name="DeckOfCards" component={DeckOfCards} />
          <Tab.Screen name="AddCard" component={AddCard} />
        </Tab.Navigator>
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
