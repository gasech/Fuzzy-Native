import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import Container from '../components/Container';
import Button from '../components/Button';

export default function AboutScreen({navigation}) {
  return (
    <View style={styles.mainPage}>
        <StatusBar style="auto" />
        <Container>       
          <Text style={styles.mainTitle}>What is Fuzzy-Native?</Text>
          <Text style={styles.mainParagraph}>
            With Fuzzy-Native you can save your tasks on your phone.
            Work, School or Home tasks? You can easily group them separately
          </Text>
        </Container>
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