import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View, StatusBar } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permissão de localização negada');
        return;
      }

      let locationWatcher = await Location.watchPositionAsync({
        accuracy: Location.Accuracy.High,
        timeInterval: 1000,  // Update location every 1 second
        distanceInterval: 1  // Or every time the device moves 1 meter
      }, (location) => {
        setLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      });

      // Don't forget to stop watching the location when the component unmounts
      return () => {
        locationWatcher.remove();
      };
    })();
  }, []);



  return (
    <View style={styles.container}>
      <Video
        source={require( './assets/test-video.mp4')}
        rate={1.0}
        volume={10.0}
        isMuted={false}
        shouldPlay
        style={styles.video}
        isPlaying={true}
        isLooping={true}
      />
      <Text style={styles.text}>Casca de Bala</Text>
      <Image source={require('')} style={styles.img}/> 
      <StatusBar style='auto'/>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={location}
        >
          <Marker
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            title="Minha Localização"
          />
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
  video: {
    width: 320,
    height: 200,
  },
  img : {
    width: 200,
    height: 100,
  },
  map: {
    width: 500,
    height: 200,
    marginTop: 20
  }
});
