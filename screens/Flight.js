import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Flight = () => {
  const [flightData, setFlightData] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const fetchFlightData = async () => {
      const options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/airports/search',
        params: {
          query: searchQuery || 'indonesia',
          locale: 'en_US'
        },
        headers: {
          'X-RapidAPI-Key': '5d50c96a28msha2ba264d3a9dd7ep1c9208jsnff62489e1c41',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        }
      };

      try {
        const response = await axios.request(options);
        setFlightData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFlightData();
  }, [searchQuery]);

  const navigateToDetail = (item) => {
    navigation.navigate('Bandara', { item });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToDetail(item)}>
      <Card containerStyle={styles.card}>
        <Text>City Name: {item.city_name || "Data tidak tersedia"}</Text>
        {/* <Text>Code: {item.code || "Data tidak tersedia"}</Text>
        <Text>Country Code: {item.country_code || "Data tidak tersedia"}</Text>
        <Text>Name: {item.name || "Data tidak tersedia"}</Text>
        <Text>State: {item.state || "Data tidak tersedia"}</Text>
        <Text>Display Name: {item.display_name || "Data tidak tersedia"}</Text>
        <Text>Location ID: {item.location_id || "Data tidak tersedia"}</Text> */}
      </Card>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <Button title="Search" onPress={() => setSearchQuery(searchQuery)} />
      </View>
      <Text style={styles.flightdata}>Flight Data</Text>
      {flightData && flightData.length > 0 ? (
        <FlatList
          data={flightData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <View style={styles.noDataContainer}>
          <Text>Data tidak tersedia</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },

  flightdata: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  card: {
    borderRadius: 10,
    marginVertical: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 10,
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
  },
  noDataContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default Flight;
