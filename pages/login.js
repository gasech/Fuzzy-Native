import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Button from '../components/Button';
import TextInput from '../components/TextInput';
import Logo from '../components/Logo';
import ColoredText from '../components/ColoredText';

export default function LoginScreen({navigation}) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  return (
    <View style={styles.mainPage}>
      <StatusBar style="auto" />
      <Logo/>
      <Text style={styles.mainTitle}>Log In</Text>
      
      <TextInput placeholder={"Username"} value={username} onChange={setUsername}/>
      <TextInput placeholder={"Password"} value={password} onChange={setPassword} secureTextEntry={true}/>
      <Button ButtonText={"Log In"} onPress={() => navigation.navigate('Tasks')}/>
      
      <Text style={styles.text}>Don't have an account? 
        <ColoredText color="red"> Sign Up</ColoredText>
      </Text>
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
    fontSize: 18,
    textAlign: 'center',
    marginTop: '50px',
  },
  text: {
    marginTop: '25px',
    textAlign: 'center',
    color: 'white',
  }
});