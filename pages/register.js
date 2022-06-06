import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import ColoredText from '../components/ColoredText';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import Logo from '../components/Logo';

export default function RegisterScreen({navigation}) {
  return (
    <View style={styles.mainPage}>
      <StatusBar style="auto" />
      <Logo/>
      <Text style={styles.mainTitle}>Register</Text>
      <TextInput placeholder={"Email"}/>
      <TextInput placeholder={"Username"}/>
      <TextInput placeholder={"Password"} secureTextEntry={true}/>
      <TextInput placeholder={"Repeat Password"} secureTextEntry={true}/>
      <Button ButtonText={"Register"} onPress={() => navigation.navigate('Tasks')}/>
      <Text style={styles.text}>Already have an account?
        <ColoredText color="#ab31bb"> Sign In</ColoredText>
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