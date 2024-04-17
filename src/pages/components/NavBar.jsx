import { Icon } from '@rneui/base'
import React from 'react'
import { View,StyleSheet, Text, Dimensions } from 'react-native'

function NavBar() {
  return (
    <View style={styles.container}>
   
    <Text style={styles.text}>Dashboard</Text>
    <Icon style={styles.icon} name='settings-outline' type='ionicon' ></Icon> 

    </View>
  )
}

 const deviceWidth=Math.round(Dimensions.get("window").width)

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#1E90FF",
        width:deviceWidth,
        height:100,  
        padding:20, 
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"flex-end" 
    },
    icon:{
       
        color:"red"
    },
    text:{
        fontSize:25,
        color:"white",
        marginTop:10,
        marginLeft:0,
        fontWeight:"500",
       
    }

})

export default NavBar


