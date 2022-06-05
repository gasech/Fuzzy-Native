import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Button from '../components/Button';
import TextInput from '../components/TextInput';

import Container from '../components/Container';
import Logo from '../components/Logo';

export default function RegisterScreen() {
  return (
    <View style={styles.mainPage}>
      <StatusBar style="auto" />
      <Logo/>
      <TextInput PlaceHolder={"Email"}/>
      <TextInput PlaceHolder={"Username"}/>
      <TextInput PlaceHolder={"Password"}/>
      <TextInput PlaceHolder={"Repeat Password"}/>
      <Button ButtonText={"Register"} onPress={() => navigation.navigate('Register')}/>
    </View>
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
    fontSize: 26,
    textAlign: 'left',
    marginLeft: '5%',
    marginTop: '5%',
  },
  mainParagraph: {
    color: 'white',
    fontSize: 16,
    textAlign: 'left',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '5%',
  },
  mainImage: {
    height: '250px',
    width: '100%'
  },
});