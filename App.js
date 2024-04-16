import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';
import { Provider } from 'react-redux';
import { store } from './src/pages/redux/store';
import NavBar from './src/pages/components/NavBar';

export default function App() {
  return (
    <View style={styles.container}>
   <NavBar/>
     <Home/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
