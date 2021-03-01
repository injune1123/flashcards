import React, { Component } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux'


class Home extends Component {
  
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
          <Text style={styles.text}>Welcome to Flash Learning</Text>
          <View style={[ styles.row]}>
            <Button
              title="View Decks of flash cards"
              onPress={() => navigation.navigate('Decks')}
            />
           </View>
           <View style={[ styles.row]}>
            <Button
              title="Create a new Deck of cards"
              onPress={() => navigation.navigate('AddDeck')}
            />
          </View>
          <View style={[ styles.row]}>
            <Button
              title="Start a quiz"
              onPress={() => navigation.navigate('AddDeck')}
            />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'rgb(59,108,212)',
    fontSize: 42,
    fontWeight: '100',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})



export default connect()(Home);
