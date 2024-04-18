import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, Button, Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Chart from './components/Chart';
import { Icon, color } from '@rneui/base';
import { ScrollView } from 'react-native';
import { Linking } from 'react-native';


export default function Home() {
    const [data,setData]=useState(null)
    const [show,setShow]=useState(false)

   
const [wish, setWish] = useState('Good Morning');

console.log("WISH",wish)




console.log("Data",data)
console.log("check...........",data?.data.recent_links)



const recentLinks=data?.data.recent_links



 const currentDate = new Date();


  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();

 
  const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;




const title=data?.data?.recent_links?.map((item)=>{
  return item.title
})

console.log("Title",title)

const Click=data?.data?.recent_links?.map((item)=>{
  return item.total_clicks
})

const handleTop=()=>{
  setShow(true)
}

const handleRecent=()=>{
  setShow(false)
}


const topLinks=data?.data.top_links



  console.log("Dateeee",formattedDate)
 

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const currentHour = now.getHours();

      if (currentHour >= 0 && currentHour < 12) {
        setWish('Good Morning');
      } else if (currentHour >= 12 && currentHour < 18) {
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

    console.log("time>>......",Date())
  return (
    <ScrollView style={styles.container}>
    <View style={styles.wrap}>
      <Text style={styles.wish}>{wish}</Text>
 
      <Text style={styles.name}>Varun</Text>
   
      </View>

      <View style={styles.chart}>
      <Chart/>
      </View>
      <View style={styles.first}>

        <View style={styles.inner}>
        <Icon style={styles.iconInner} color="#7B68EE" type='ionicon' name='arrow-up-circle-outline'></Icon>
        <Text style={styles.innerText}>{data?.today_clicks}</Text>
         <Text style={styles.innerText1}>Today's clicks</Text>
        </View>
         <View style={styles.inner}>
         <Icon style={styles.iconInner}  color="#6495ED" type='ionicon' name='location-outline'></Icon>
        <Text style={styles.innerText}>{data?.top_location}</Text>
         <Text style={styles.innerText1}>Top Location</Text>
        </View>
         <View style={styles.inner}>
         <Icon style={styles.iconInner}  color="#DC143C" type='ionicon' name='globe-outline'></Icon>
        <Text style={styles.innerText}>{data?.top_source}</Text>
         <Text style={styles.innerText1}>Top source</Text>
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

{show?<View style={styles.link1}>
<TouchableOpacity onPress={handleTop}>
<Text style={styles.textLink}>Top Links</Text>
</TouchableOpacity>

<TouchableOpacity onPress={handleRecent}>
<Text style={styles.textLink1}>Recent Links</Text>
</TouchableOpacity>
</View>:



<View style={styles.link1}>
<TouchableOpacity onPress={handleTop}>
<Text style={styles.textLinkN}>Top Links</Text>
</TouchableOpacity>

<TouchableOpacity onPress={handleRecent}>
<Text style={styles.textLink1N}>Recent Links</Text>
</TouchableOpacity>
</View>}


<Icon type='ionicon' name='search-outline'></Icon>
</View>


{show?<View style={styles.dataBox}>

{topLinks?.map((item)=>(

  <View style={styles.box}>

<View style={styles.mapWrap}>
<Image style={styles.img}
        source={{uri:item.original_image}}
      
      />
      <View>
  <Text style={styles.datatext}>{item.app}</Text>
  <Text>{formattedDate}</Text>
  </View>
  <View>
  <Text style={styles.click}>{item?.total_clicks}</Text>
    <Text style={styles.clickText}>Clicks</Text>
    </View>
 </View>
 <View style={styles.mapWrap1} >
<Text style={styles.mapWraplink}  onPress={() => Linking.openURL(item.web_link)}>{item.web_link}</Text>

<Icon type='ionicon' name='copy-outline'></Icon>
 
 </View>
</View>
))}

</View>:


<View style={styles.dataBox}>

{recentLinks?.map((item)=>(

  <View style={styles.box}>

<View style={styles.mapWrap}>
<Image  style={styles.img}
        source={{uri:item.original_image}}
      
      />
      <View>
  <Text style={styles.datatext}>{item.app}</Text>
  <Text>{formattedDate}</Text>
  </View>

  <View>
  <Text style={styles.click}>{item.total_clicks}</Text>
  <Text style={styles.clickText}>Clicks</Text>
  </View>
 </View>
 <View style={styles.mapWrap1} >
<Text style={styles.mapWraplink}  onPress={() => Linking.openURL(item.web_link)}>{item.web_link}</Text>

<Icon type='ionicon' name='copy-outline'></Icon>

 </View>
</View>
))}

</View>
 

}

</View>

<View style={styles.bottom}>

<View style={styles.view}>
<Icon type='ionicon' name='link-outline'></Icon>
<Text >View all links</Text>
</View>


<View style={styles.last}>

<View style={styles.lastbox}>
<Icon type='ionicon' name='logo-whatsapp'></Icon>
  <Text style={styles.bottomtext}>Chat</Text>
  </View>
  <View style={styles.lastbox1}>
  <Icon type='ionicon' name='help-circle-outline'></Icon>
   <Text style={styles.bottomtext}>Frequently asked question</Text>
   </View>
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
    backgroundColor:"#FDF5E6",
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30,   
  },
 
  link1:{
    flexDirection:"row",
    gap:10

  },
  last:{
    gap:20,
    marginTop:50,
    marginBottom:50,  
  }
  ,
  chart:{
 
    justifyContent:"center",
    alignItems:"center"
  },
  bottomtext:{
    fontSize:18,
  },
  img:{
    height:30,
    width:40,
  }
  ,

lastbox:{
  flexDirection:"row",
  borderWidth:1.4,
 borderColor:"#90EE90",
  borderRadius:10,
  width:300,
  height:50,
  padding:10,
  gap:20,
  backgroundColor:"#D0F0C0",
  
  
 

},
lastbox1:{
  flexDirection:"row",
  borderWidth:1.4,
  borderRadius:10,
  width:300,
  height:50,
  padding:10,
  gap:20,
  borderColor:"#00BFFF",
  backgroundColor:"#ADD8E6"
 

},
  iconInner:{
 
    color:"red",
    justifyContent:"left",
    textAlign:"left",
    alignItems:"flex-start",
    marginBottom:20,
  },
  view:{
    borderWidth:.4,
    borderColor:"grey",
    width:"90%",
    textAlign:"center",
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    flexDirection:"row",
    gap:10,
     borderRadius:10,
  },
  bottom:{

    justifyContent:"center",
    alignItems:"center",
  },
  clickText:{
    color:"grey"
  },
  innerText1:{
    fontWeight:"100"

  },
  innerText:{
    fontWeight:"800"
  },
  box:{
    // borderWidth:2,
    // borderColor:"red",
    backgroundColor:"#fff",
    borderRadius:10,
    justifyContent:"space-between",
    height:100,
  },mapWrap:{
    padding:20,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  mapWraplink:{
    color:"#1877F2",
    fontSize:15,
  },
  mapWrap1:{
    flexDirection:"row",
    justifyContent:"space-between",
    borderStyle:"dotted",
    borderWidth:1,
    borderColor:"#1E90FF",
    backgroundColor:"#E1EBEE",
    padding:10,
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
  },


  datatext:{
    fontSize:18
    
  },
  mapdata:{
    borderColor:"red",
    padding:30,
    borderWidth:3,
  },
  dataBox:{

    padding:25,
    gap:50

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
    borderRadius:15,
    padding:10,
    width:"100%",
    textAlign:"center",
    backgroundColor:"#1E90FF",
    color:"white",


  },
   textLink1:{
    fontSize:15,
    borderRadius:15,
    padding:10,
    width:"100%",
    textAlign:"center",
    backgroundColor:"#fff",
    color:"grey",


  },
   textLinkN:{
    fontSize:15,
    borderRadius:15,
    padding:10,
    width:"100%",
    textAlign:"center",
    backgroundColor:"#fff",
    color:"grey",
  },
  textLink1N:{
    fontSize:15,
    borderRadius:15,
    padding:10,
    width:"100%",
    textAlign:"center",
    backgroundColor:"#1E90FF",
    color:"#fff",
  },
  name:{
  
    flexDirection:"row",
    fontWeight:"600",
    fontSize:22
    },
  first:{
  
    flexDirection:"row",
    justifyContent:"space-between",
    padding:10,
    
  },
  out:{
    // borderWidth:2,
    // borderColor:"blue",
  },
  wish:{
    marginTop:20,
    fontWeight:"400",
    fontSize:18,
    color:"grey"
  },
  wrap:{
 
    padding:15
  },
  inner:{
    width:100,
    height:100,
    borderRadius:10,
    backgroundColor:"#fff",
    padding:10,
  
  },
  cover:{
  
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