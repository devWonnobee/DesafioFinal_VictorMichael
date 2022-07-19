import React, { useState , useEffect, useRef } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import * as MediaLibrary from 'expo-media-library';
import { Camera, CameraType } from 'expo-camera';
import { CameraButton } from "../components";
import { styles } from "./styles";

const Camera = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const { status } = await Camera.requestCameraPermissionAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text> No access to camera </Text>;
  }
  return (
    <View style={styles.container}>
      <Camera 
        style={styles.camera} 
        type={type}
        ref={cameraRef}
      >
      </Camera>
      <View>
        <CameraButton title={'Tomar foto'} icon="camera" />
      </View>
    </View>
  );
}


export default Camera;