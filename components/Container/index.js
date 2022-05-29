import * as React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Container({children}) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: '5%',
    width: '90%',
    height: '25%',
    borderRadius: '5px',
    backgroundColor: '#2C2C2E80'
  }
});
