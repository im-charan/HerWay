import {React, useState, useEffect} from 'react';
import MapView , {Marker} from 'react-native-maps';
import { StyleSheet, View ,Text , Dimensions,Button,TextInput} from 'react-native';
import * as Location from 'expo-location'
import { StatusBar } from 'expo-status-bar';
import currLoc from '../../assets/img/current-location.jpg'

export default function HomePage() {

  const [mapRegion ,setMapRegion] = useState({
    latitude : 13.139676,
    longitude : 80.1347686,
    longitudeDelta : 0.0421,
    latitudeDelta : 0.0922
  })

  const userLocation = async () => {
    let status = await Location.requestForegroundPermissionsAsync();
    let location = await Location.getCurrentPositionAsync({});
    if (status !== 'granted'){
      console.log('Permission to access location was denied');
      setMapRegion({
        latitude : 13.139676,
        longitude : 80.1347686,
        longitudeDelta : 0.0421,
        latitudeDelta : 0.0922
      });
    }
    else{
      
    }

    setMapRegion({
      latitude : location.coords.latitude,
      longitude : location.coords.longitude,
      longitudeDelta : 0.0421,
      latitudeDelta : 0.0922
    });
    console.log(location.coords.latitude,location.coords.longitude);
  }


  useEffect(() => {
    userLocation();
  },[]);

  return (
    <View style={styles.container}>

      <MapView 
      style={styles.map} 
      region={mapRegion}
      >
        <Marker coordinate={mapRegion} title='Marker' pinColor='yellow'>
        </Marker>
      </MapView>
      <View style={{ position: 'absolute', top: 10, width: '100%' }}>
    <TextInput
      style={{
        borderRadius: 10,
        margin: 10,
        color: '#000',
        borderColor: '#666',
        backgroundColor: '#FFF',
        borderWidth: 1,
        height: 45,
        paddingHorizontal: 10,
        fontSize: 18,
      }}
      placeholder={'Search'}
      placeholderTextColor={'#666'}
    />
  </View>
      {/* <Button title='Get Location' onPress={userLocation}/> */}
      <StatusBar style='auto'/>
    </View>

    // <View>
    //   <LoginScreen />
    // </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map : {
    height : '100%',
    width : '100%'
  }
});