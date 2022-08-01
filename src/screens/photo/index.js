import * as MediaLibrary from 'expo-media-library';

import { Button, Image, SafeAreaView, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";

import { Camera } from "expo-camera";
import { shareAsync } from "expo-sharing";

const Photo = () => {
    let cameraRef = useRef();
    const [hasCameraPermission, setHasCameraPermission] = useState();
    const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
    const [photo, setPhoto] = useState();

    useEffect(() => {
        (async () => {
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
            setHasCameraPermission(cameraPermission === "granted");
            setHasMediaLibraryPermission(mediaLibraryPermission.status === "grante");
        })();
    }, []);

    if (hasCameraPermission === undefined) {
        return <Text>Requesting permissions...</Text>
    } else if (!hasCameraPermission) {
        return <Text> Permission for camera not granted. Please change permission.</Text>
    }

    let takePic = async () => {
        let options = {
            quality: 1,
            base64: true,
            exif: false
        };

        let newPhoto = await cameraRef.current.takePictureAsync(options);
        setPhoto(newPhoto);
    }

    if(photo) {
        let ratePic = () => {
            shareAsync(photo.uri).then(() => {
                setPhoto(undefined);
            })
        };

        let savePhoto = () => {
            MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
                setPhoto(undefined);
            })
        };

        return (
            <SafeAreaView style={styles.container}>
                <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64}} />
                <Button title="Rate it" onPress={ratePic} />
                {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto}/> : undefined}
                <Button title="Discard" onPress={() => setPhoto(undefined)} />
            </SafeAreaView>
        )
    }

    return (
        <Camera style={styles.container} ref={cameraRef}>
            <View style={styles.buttonContainer}>
                <Button title="Take Pic" onPress={takePic} />
            </View>
        </Camera>

    );
}

export default Photo;