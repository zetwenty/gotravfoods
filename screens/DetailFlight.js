import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailFlight = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detail Flight</Text>
      <View style={styles.detailItem}>
        <Text style={styles.label}>Code:</Text>
        <Text>{item.code}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.label}>City Name:</Text>
        <Text>{item.city_name}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.label}>Country Code:</Text>
        <Text>{item.country_code}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.label}>Name:</Text>
        <Text>{item.name}</Text>
      </View>
      {/* <View style={styles.detailItem}>
        <Text style={styles.label}>State:</Text>
        <Text>{item.state}</Text>
      </View> */}
      <View style={styles.detailItem}>
        <Text style={styles.label}>Display Name:</Text>
        <Text>{item.display_name}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.label}>Location ID:</Text>
        <Text>{item.location_id}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.label}>Time Zone Name:</Text>
        <Text>{item.time_zone_name}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.label}>Latitude:</Text>
        <Text>{item.latitude}</Text>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.label}>Longitude:</Text>
        <Text>{item.longitude}</Text>
      </View>
      {item.parent_code && (
        <View style={styles.detailItem}>
          <Text style={styles.label}>Parent Code:</Text>
          <Text>{item.parent_code}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default DetailFlight;
