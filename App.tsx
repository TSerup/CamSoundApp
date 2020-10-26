import React, { useState, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, SafeAreaView} from "react-native";
import { Camera } from "expo-camera";
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';


export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [isPreview, setIsPreview] = useState(false);
  const cameraRef = useRef();

  // Start by getting permission to access camera. 
  // On IOS it's also needed to get permission to access cameraroll
  useEffect(() => {
    (async () => {
      const permission = await Camera.requestPermissionsAsync();
      setHasPermission(permission.status === "granted");
  })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text style={styles.text}>No access to camera</Text>;
  }

  // Function for taking pictures and setting preview. 
  // Pictures are saved in cache, and to save picture use Expo.FileSystem.copyAsync
  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true, skipProcessing: true };
      const { uri } = await cameraRef.current.takePictureAsync(options);
      
      if (uri) {
        await cameraRef.current.pausePreview();
        setIsPreview(true);
        console.log("picture source", uri);
      }
    }
  };
  
  // Function for accessing the picture folder
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      // Change 'Images' to 'All' and you will also have videos available
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  };

// Function for toggling the camera between back and front
  const switchCamera = () => {
    if (isPreview) {
      return;
    }
    setCameraType((prevCameraType) =>
      prevCameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  // Function for returning from preview
  const cancelPreview = async () => {
    await cameraRef.current.resumePreview();
    setIsPreview(false);
  };

  // When in preview mode show button to return to normal mode
  const renderCancelPreviewButton = () => (
    <TouchableOpacity onPress={cancelPreview} style={styles.closeButtonArea}>
      <Ionicons name="md-close-circle" style={styles.closeButton}></Ionicons>
    </TouchableOpacity>
  );

  // Normal mode
  const renderCaptureControl = () => (
    <View style={styles.view}>
      <TouchableOpacity onPress={switchCamera} style={styles.touchable}>
        <MaterialCommunityIcons name="camera-switch" style={styles.icons}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={takePicture} style={styles.touchable}>
        <FontAwesome name="camera" style={styles.icons}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={pickImage}>
        <Ionicons name="ios-photos" style={styles.icons}/>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.container}
        type={cameraType}
        flashMode={Camera.Constants.FlashMode.on}
        onMountError={(error) => {console.log("camera error", error);
        }}/>
      <View style={styles.container}>
        {isPreview && renderCancelPreviewButton()}
        {!isPreview && renderCaptureControl()}
      </View>
    </SafeAreaView>
  );
}