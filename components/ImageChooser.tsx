import React, { useState, useEffect } from 'react'
import { Button, Image, View, Platform, Text } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as ImageManipulator from 'expo-image-manipulator'
import Styles from './Styles'

type ImageChooserProps = {
  onChangeImage: (image: string) => void
}
const ImageChooser = (props: ImageChooserProps) => {
  const [image, setImage] = useState('')

  useEffect(() => {
    ;(async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()
        if (status !== 'granted') {
          alert('sorry, we need camera roll permission')
        }
      }
    })()
  }, [])

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspects: [1, 1],
    })
    if (!result.cancelled) {
      var resizedImage = await ImageManipulator.manipulateAsync(
        result.uri,
        [{ resize: { width: 50, height: 50 } }],
        { base64: true }
      )
      var imageBase64 = resizedImage.base64 ?? ''
      setImage(result.uri)
      props.onChangeImage(imageBase64)
    }
  }
  return (
    <View>
      <Button title="pick an Image" onPress={pickImage} />
      {image ? (
        <Image
          resizeMode="cover"
          source={{ uri: image }}
          style={Styles.avatarBig}
        />
      ) : (
        <Text style={{ alignSelf: 'center' }}>No image selected</Text>
      )}
    </View>
  )
}

export default ImageChooser
