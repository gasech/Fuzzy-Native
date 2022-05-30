import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import Nav from './components/Nav';
import Container from './components/Container';
import Button from './components/Button';

import image from './assets/image1.png';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.mainPage}>
        <Nav />
        <StatusBar style="auto" />
        <ImageBackground style={styles.mainImage} source={image}>
          <Button ButtonText={'Log In'} />
          <Button ButtonText={'Register'} />
        </ImageBackground>
        <Container>
          <Text style={styles.mainTitle}>What is Fuzzy-Native?</Text>
          <Text style={styles.mainParagraph}>
            With Fuzzy-Native you can save your tasks on your phone.
            Work, School or Home tasks? You can easily group them separately
          </Text>
        </Container>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainPage: {
    height: '100%',
    width: '100%',
    backgroundColor: '#1c1c1e',
  },
  mainTitle: {
    color: 'white',
    fontSize: '26px',
    textAlign: 'left',
    marginLeft: '5%',
    marginTop: '5%',
  },
  mainParagraph: {
    color: 'white',
    fontSize: '16px',
    textAlign: 'left',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '5%',
  },
  mainImage: {
    height: '440px',
    width: '100%'
  },
});
