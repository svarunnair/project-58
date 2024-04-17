import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Chart from './components/Chart';
import { Icon } from '@rneui/base';
import Card from './components/Card';
import { ScrollView } from 'react-native';

export default function Home() {
    const [data,setData]=useState(null)

   
const [wish, setWish] = useState('Good Morning');

console.log("WISH",wish)




console.log("Data",data)
console.log("check...........",data?.data.recent_links)

const recentLinks=data?.data.recent_links



const title=data?.data?.recent_links?.map((item)=>{
  return item.title
})

console.log("Title",title)

const Click=data?.data?.recent_links?.map((item)=>{
  return item.total_clicks
})

console.log("Clicksss",Click)
console.log("RecentLinks",recentLinks)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const options = {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
      };
      const timeString = now.toLocaleTimeString('en-US', options);

      const hour = parseInt(timeString.slice(0, 2), 10); 
  
      if (hour >= 0 && hour < 12) {
        setWish('Good Morning');
      } else if (hour >= 12 && hour < 18) {
        setWish('Good Afternoon');
      } else {
        setWish('Good Evening'); 
      }
    }, 1000);
  
    return () => clearInterval(intervalId);
  }, []);


    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjU5MjcsImlhdCI6MTY3NDU1MDQ1MH0.dCkW0ox8tbjJA2GgUx2UEwNlbTZ7Rr38PVFJevYcXFI"
                const res=await fetch("https://api.inopenapp.com/api/v1/dashboardNew",{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
                const json = await res.json();
                setData(json);
            }
            catch(err){
                console.log("error",err)
            }
        }
        fetchData()
    },[])
  return (
    <ScrollView style={styles.container}>
    <View style={styles.wrap}>
      <Text style={styles.wish}>{wish}</Text>
 
      <Text style={styles.name}>Varun</Text>
   
      </View>
      <Chart/>
      <View style={styles.first}>
        <View style={styles.inner}>
        </View>
         <View style={styles.inner}>
        </View>
         <View style={styles.inner}>
        </View>
      </View>
<View style={styles.cover}>

<TouchableOpacity style={styles.btn}  title='View Analytics'>
<View style={styles.out}><Icon style={styles.icon} type='ionicon' name='trending-up-outline'></Icon></View>

<View style={styles.out}>
<Text style={styles.hr}>
 View Analytics
 </Text>
 </View>
 
 </TouchableOpacity>
</View>

{/* links */}

<View style={styles.second}>
<View style={styles.link}>
<Text style={styles.textLink}>Top Links</Text>
<Text style={styles.secondtext}>Recent Links</Text>
<Icon type='ionicon' name='search-outline'></Icon>
</View>


<View style={styles.dataBox}>

{recentLinks?.map((item)=>(

  <View style={styles.box}>

<View style={styles.mapWrap}>
  <Text style={styles.datatext}>{item.app}</Text>
  <Text style={styles.click}>{item.total_clicks}</Text>
 </View>
 <View style={styles.mapWrap1} >
 <Text>{item.web_link}</Text>
 <Icon type='ionicon' name='copy-outline'></Icon>
 </View>
</View>
))}

</View>

</View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const deviceWidth=Math.round(Dimensions.get("window").width)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:deviceWidth,
    backgroundColor:"#FFFAF0",
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30,   
  },
  img:{
    width:"100%"
  },
  box:{
    borderWidth:2,
    borderColor:"red",
    padding:10,
    height:100,
  },mapWrap:{
    flexDirection:"row",
    justifyContent:"space-between"
  },
  mapWrap1:{
    flexDirection:"row",
    justifyContent:"space-between",
    borderStyle:"dotted",
    borderWidth:1,
    borderColor:"#1E90FF",
    backgroundColor:"#B0E0E6",
  },


  datatext:{
    
  },
  mapdata:{
    borderColor:"red",
    padding:30,
    borderWidth:3,
  },
  dataBox:{
    borderWidth:2,

  },
  listMap:{
    borderColor:"red",
    borderWidth:2,
    padding:20,
  },
  dataMap:{
    borderColor:"green",
    borderWidth:2,
   },
  secondtext:{
    color:"grey",
    fontSize:14,

  },
  link:{
    flexDirection:"row",
    justifyContent:"space-between",
    padding:20,
  },
  second:{
    marginTop:10,
  },
  textLink:{
    fontSize:15,
    borderRadius:20,
    padding:10,
    width:"25%",
    textAlign:"center",
    backgroundColor:"#1E90FF",
    color:"white",


  },
  name:{
  
    flexDirection:"row",
    fontWeight:"600",
    fontSize:20
    },
  first:{
  
    flexDirection:"row",
    justifyContent:"space-between",
    padding:10
  },
  out:{
    // borderWidth:2,
    // borderColor:"blue",
  },
  wish:{
    marginTop:20,
  },
  wrap:{
 
    padding:15
  },
  inner:{
    width:100,
    height:100,
    borderWidth:1,
    borderColor:"red",
    backgroundColor:"#fff"
  },
  cover:{
    // borderColor:"red",
    // borderWidth:2,
    justifyContent:"center",
    alignItems:"center"
  },
  btn:{
    flexDirection:"row",
    borderColor:"#B0B0B0",
    width:250,
    height:30,
    marginTop:10,
    borderWidth:1,
    alignItems:"center",
    justifyContent:"center",
    gap:10,
  },
  icon:{ 

   },
  hr:{
  
    textAlign:"center",
    width:"100%",
    fontWeight:"700",

  }
});