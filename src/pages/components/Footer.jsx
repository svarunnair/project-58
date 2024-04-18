import { Icon } from '@rneui/base'
import React from 'react'
import { Dimensions, View ,StyleSheet, Text} from 'react-native'

function Footer() {
  return (
    <View style={styles.container}>
    <View>
   <Icon name='link-outline' type='ionicon'></Icon>
   <Text>Links</Text>
   </View>
   <View>
    <Icon name='book-outline' type='ionicon'></Icon>
    <Text>Courses</Text>
    </View>

    <View style={styles.wrap}>
     <Icon style={styles.icon} name='add-outline' type='ionicon' color={"#FFF"} ></Icon>
     </View>
     <View>
      <Icon name='megaphone-outline' type='ionicon'></Icon>
      <Text>Campaigns</Text>
      </View>
      <View>
       <Icon name='person-outline' type='ionicon'></Icon>
       <Text>Profile</Text>
       </View>


    </View>
  )
}


const deviceWidth=Math.round(Dimensions.get("window").width)

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#F5F5F5",
        width:deviceWidth,

        height:70,
        padding:20,
        flexDirection: "row",
        justifyContent:"space-between",
        position:"relative",
       
    },
    icon:{
         color:"#fff",
        
    },
    wrap:{
        backgroundColor:"#1E90FF",
        width:50,
        height:50,
        justifyContent:"center",
        borderRadius:100, 
        bottom:30,
    
    }


})

export default Footer