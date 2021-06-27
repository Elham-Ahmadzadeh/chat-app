import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AppLoading from 'expo-app-loading'
import { LogBox } from 'react-native'
import Chat from './components/Chat'
import PersonalInfo from './components/PersonalInfo'
import Styles from './components/Styles'

LogBox.ignoreLogs(['Warning: ...']) // Ignore log notification by message
LogBox.ignoreAllLogs()

export default function App() {
  const storageUserNameKey = 'chatapp-username'
  const storageImageKey = 'chatapp-image'
  const [username, setUsername] = useState('')
  const [image, setImage] = useState('')
  const [isLoading, setIsloading] = useState(true)

  const fetchPersonalData = async () => {
    let fetchedUsername = await AsyncStorage.getItem(storageUserNameKey)
    let userName = fetchedUsername == null ? '' : fetchedUsername
    let fetchedImage = await AsyncStorage.getItem(storageImageKey)
    let image = fetchedImage == null ? '' : fetchedImage
    setUsername(userName)
    setImage(image)
  }

  const onPersonalInfoClosed = async (name: string, image: string) => {
    setUsername(name)
    await AsyncStorage.setItem(storageUserNameKey, name)
    setImage(image)
    await AsyncStorage.setItem(storageImageKey, image)
  }
  if (isLoading) {
    return (
      <AppLoading
        startAsync={fetchPersonalData}
        onFinish={() => setIsloading(false)}
        onError={console.warn}
      />
    )
  }
  let activeComponent =
    username != '' ? (
      <Chat username={username} image={image} />
    ) : (
      <PersonalInfo onClosed={onPersonalInfoClosed} />
    )
  return (
    <SafeAreaView style={Styles.container}>
      {activeComponent}
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}
