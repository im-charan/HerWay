import {React, useState, useEffect} from 'react';
import MapView , {Marker} from 'react-native-maps';
import { StyleSheet, View ,Text , Dimensions,Button} from 'react-native';
import * as Location from 'expo-location'
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './(screen)/(login)/loginScreen';

export default function App() {

  const [mapRegion ,setMapRegion] = useState({
    latitude : 13.08784000,
    longitude : 80.27847000,
    longitudeDelta : 0.0421,
    latitudeDelta : 0.0922
  })

  const userLocation = async () => {
    let status = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted'){
      console.log('Permission to access location was denied');
    }

    let location = await Location.getCurrentPositionAsync({});
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

      <MapView style={styles.map} 
      region={mapRegion}
      >
        <Marker coordinate={mapRegion} title='Marker'/>
      </MapView>
      <Button title='Get Location' onPress={userLocation}/>
      <StatusBar style='auto'/>
    </View>

    // <View>
    //   <LoginScreen />
    // </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop : 25
  },
  map : {
    height : '95%',
    width : '100%'
  }
});