import React, { useEffect, useState } from 'react';
import { Dimensions, Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

function Chart() {
  const [data, setData] = useState(null);

  useEffect(() => {
 
    const overallUrlChartData = {
      "0": 0,
      "1": 0,
      "2": 1,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0
    };


    const labels = Object.keys(overallUrlChartData); 
    const datasets = [
      {
        data: Object.values(overallUrlChartData)
      }
    ];

    setData({ labels, datasets }); 
  }, []);

  return (
    <View>
      {data && (
        <LineChart
          data={data}
          width={Dimensions.get('window').width - 20}
          height={220}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: 'green',
            backgroundGradientTo: '#ffa726',
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: '4',
              strokeWidth: '2',
              stroke: '#1E90FF'
            }
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      )}
    </View>
  );
}

export default Chart;
