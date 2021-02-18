import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { connect } from 'react-redux'



class Home extends Component {

  render() {
  return (
    <View>
        <Text>Welcome to Flash Learning</Text>
        <Text>View Decks of flash cards</Text>
        <Text>Create a new Deck of cards</Text>
        <Text>Start a quiz</Text>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  card:{
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    margin: 10
  }
});



export default connect()(Home);
