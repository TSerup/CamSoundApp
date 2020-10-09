import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Camera } from 'expo-camera';
import styles from './styles';
import CamButtons from './src/CamButtons';

export default function App() {
  const [Permission, setPermission] = useState("");
  const [type, setType] = useState(Camera.Constants.Type.back);
  
  useEffect(() => {
    (async () => { 
      let { status } = await Camera.requestPermissionsAsync();
      if(status !== 'granted')
        setPermission('Permission to access camera was denied');
    })();
  }, []);
  
  // Toggles the camera between back and front
  function cameraType() {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  }
  return (
    <View style={styles.fullScreen}>
      <Text style={styles.text}>{Permission}</Text>
      <Camera style={styles.fullScreen} type={type}>
        <CamButtons onPressSwitch={cameraType}/> 
      </Camera>
    </View>
  );
}