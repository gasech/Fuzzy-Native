import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

import Button from '../components/Button';
import Logo from '../components/Logo';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.mainPage}>
        <StatusBar style="auto" />
        <Logo/>
        <Button ButtonText={"Create a new account"} onPress={() => navigation.navigate('Register')}/>
        <Button ButtonText={"Log In"} onPress={() => navigation.navigate('Login')}/>
      </View>
  );
}

const styles = StyleSheet.create({
  mainPage: {
    height: '100%',
    width: '100%',
    backgroundColor: '#1c1c1e',
  }
});