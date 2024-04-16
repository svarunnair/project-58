import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function Home() {
    const [data,setData]=useState(null)


    console.log("dataaaaaa",data)

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
    <View style={styles.container}>
      <Text> Home......ddd!</Text>
      <StatusBar style="auto" />
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