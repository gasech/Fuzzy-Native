import * as React from 'react';
import { TouchableHighlight, Text, StyleSheet, View } from 'react-native';

const toggleMenu = () => {
  console.log('toggle menu');
}

export default function Button({ ButtonText }) {
  return (
    <TouchableHighlight style={styles.pressable} onPress={toggleMenu}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{ButtonText}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  pressable: {
    marginTop: '45px',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '9px',
    width: '70%',
  },
  button: {
    width: '100%',
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
