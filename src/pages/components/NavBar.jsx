import React from 'react'
import { View,StyleSheet, Text, Dimensions } from 'react-native'

function NavBar() {
  return (
    <View style={styles.container}>
    <Text>Navvvvvvvvvvvvvvv</Text>

    </View>
  )
}

 const deviceWidth=Math.round(Dimensions.get("window").width)

const styles=StyleSheet.create({
    container:{
        
        borderWidth:3,
        backgroundColor:"#1E90FF",
        width:deviceWidth,
        height:100

        
    }
})

export default NavBar


