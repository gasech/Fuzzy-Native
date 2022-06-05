import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Button from '../components/Button';
import TextInput from '../components/TextInput';

import Logo from '../components/Logo';

export default function LoginScreen() {
  return (
    <View style={styles.mainPage}>
      <StatusBar style="auto" />
      <Logo/>
      <Text style={styles.mainTitle}>Login</Text>
      <TextInput PlaceHolder={"Username"}/>
      <TextInput PlaceHolder={"Password"}/>
      <Button ButtonText={"Log In"} onPress={() => navigation.navigate('Login')}/>
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