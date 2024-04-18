import React, { useEffect, useState } from 'react'
import { Dimensions, Text, View } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

function Chart() {

      const [data,setData]=useState(null)


      console.log("ChartData....",data)



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
  <View>
  <LineChart
    data={{
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug"],
      datasets: [
        {
          data: [
            0,
            25,
            50,
            75,
            100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width-20}
    height={220}
    yAxisLabel=""
    yAxisSuffix=""
    yAxisInterval={1} 
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "green",
      backgroundGradientTo: "#ffa726",
     
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}

    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>
  )
}

export default Chart