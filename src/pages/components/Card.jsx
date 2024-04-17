import React from 'react'
import { StyleSheet, View } from 'react-native'

function Card({info}) {
    console.log("Infooooooo..../",info)
  return (
    <View style={styles.listMap}>

    <View style={styles.one}>
    </View>

    <View style={styles.two}>
    </View>

    <View style={styles.three}>
    </View>

    </View>
  )
}

const styles=StyleSheet.create({
    listMap:{
        borderColor:"green",
        borderWidth:4,
        width:"90%",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    one:{
        width:"10%",
        borderColor:"blue",
        borderWidth:2
    },
    two:{
        width:"50%",
        borderColor:"blue",
        borderWidth:2
    },
    three:{
        width:"20%",
        borderColor:"blue",
        borderWidth:2
    }
})
export default Card