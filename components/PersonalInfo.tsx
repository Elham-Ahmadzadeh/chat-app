import React, { useState } from 'react'
import { View, Text, TextInput, Image, Button } from 'react-native'
import ImageChooser from './ImageChooser'
import Styles from './Styles'

type PersonalInfoProps = {
  onClosed: (name: string, image: string) => void
}

function PersonalInfo({ onClosed }: PersonalInfoProps) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  return (
    <View style={Styles.PersonalInfoContainer}>
      <Image
        style={Styles.logo}
        source={require('../assets/wired-brain.png')}
      />
      <View style={Styles.enterYourName}>
        <Text style={Styles.nameText}>Please Enter your name</Text>
        <TextInput
          style={Styles.nameTextInput}
          onChangeText={(text) => setName(text)}
          value={name}
        />
      </View>
      <ImageChooser onChangeImage={(image) => setImage(image)} />
      <Button title="start chatting" onPress={() => onClosed(name, image)} />
    </View>
  )
}

export default PersonalInfo
