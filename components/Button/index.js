import * as React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';

const toggleMenu = () => {
  console.log('toggle menu');
}

export default function Button({ ButtonText }) {
  return (
    <Pressable style={styles.pressable} onPress={toggleMenu}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{ButtonText}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    marginTop: '45px',
  },
  button: {
    margin: 'auto',
    width: '70%',
    height: '35px',
    borderRadius: '9px',
    backgroundImage: 'linear-gradient(90deg, rgba(19,182,228,1) 12%, rgba(123,49,187,1) 97%)',
  },
  buttonText: {
    padding: '4px',
    textAlign: 'center',
    color: 'white',
    fontSize: '18px',
  }
});
