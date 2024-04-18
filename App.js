import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';
import NavBar from './src/pages/components/NavBar';
import Footer from './src/pages/components/Footer';



export default function App() {
  return (
    <View style={styles.container}>
   <NavBar/>
     <Home/> 
     <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E90FF",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
