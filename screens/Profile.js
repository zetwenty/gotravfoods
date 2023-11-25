import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

const Profile = () => {
  // Data profil (gantilah dengan data sesuai kebutuhan)
  const profileData = {
    name: 'Me',
    gender: 'Male',
    hobby: 'Playing Football, Reading, Movie',
    origin: 'Tangerang',
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F0F0F0', paddingTop: 50 }}>
      <View style={{ paddingHorizontal: 16, paddingTop: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#0B646B' }}>Profile</Text>

        {/* Nama */}
        <View style={styles.itemContainer}>
          <Text style={styles.label}>Nama</Text>
          <Text style={styles.value}>{profileData.name}</Text>
        </View>

        {/* Jenis Kelamin */}
        <View style={styles.itemContainer}>
          <Text style={styles.label}>Jenis Kelamin</Text>
          <Text style={styles.value}>{profileData.gender}</Text>
        </View>

        {/* Hobi */}
        <View style={styles.itemContainer}>
          <Text style={styles.label}>Hobi</Text>
          <Text style={styles.value}>{profileData.hobby}</Text>
        </View>

        {/* Asal */}
        <View style={styles.itemContainer}>
          <Text style={styles.label}>Asal</Text>
          <Text style={styles.value}>{profileData.origin}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  label: {
    flex: 1,
    fontSize: 18,
    color: '#2C7379',
    textAlign: 'left',
  },
  value: {
    flex: 1,
    fontSize: 20,
    color: '#0B646B',
    textAlign: 'left',
  },
};

export default Profile;
