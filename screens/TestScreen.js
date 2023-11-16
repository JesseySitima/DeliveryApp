import React, { useState, useEffect,  } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

const TestScreen = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      // Fetch data from your backend API
      const fetchData = async () => {
        try {
          const response = await axios.get('http://10.0.2.2:3000/api/data');
          setData(response.data); // Assuming the response contains an array of objects
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Data from Database:</Text>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>{`Field 1: ${item.title}`}</Text>
              <Text>{`Field 2: ${item.field2}`}</Text>
              {/* Render other fields as needed */}
            </View>
          )}
        />
      </View>
    );
  };
  

export default TestScreen

