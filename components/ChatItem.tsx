import React, {useState, useEffect} from 'react'
import { Easing } from 'react-native'
import { View, Image, Text, Animated } from 'react-native'
import Styles from './Styles'

interface ChatItem {
  id: string
  text: string
  image: string
  timeStamp: number
  by: string
}
interface Props {
  chatItem: ChatItem
  username: string
}

const RenderChatItem = ({ chatItem, username }: Props) => {
  let unknownAvatarImage =
    'iVBORw0KGgoAAAANSUhEUgAAACcAAAAaCAMAAAADmbV0AAAAAXNSR0IArs4c6QAA'
  let avatarImage = chatItem.image ?? unknownAvatarImage

let [animatedValue] = useState(new Animated.Value(0))
useEffect(() => {
  Animated.timing(animatedValue, {
    toValue: 1,
    duration: 400,
    easing: (number) => Easing.ease(number),
    useNativeDriver: true,
  }).start()
})

  return (
    <Animated.View
      style={[
        Styles.flatListItem,
        { borderColor: username == chatItem.by ? 'green' : 'blue' },
        {opacity: animatedValue},
        {transform: [{scale: animatedValue}]}
      ]}
    >
      <View style={Styles.chatItemHeader}>
        <Image
          source={{
            uri: 'data:image/jpeg;base64,' + avatarImage,
          }}
          style={Styles.avatarSmall}
        />
        <Text style={Styles.smallItalicText}>
          {chatItem.by} at {new Date(chatItem.timeStamp).toLocaleTimeString()}
        </Text>
      </View>
      <Text style={Styles.chatText}>{chatItem.text}</Text>
    </Animated.View>
  )
}
export { ChatItem, RenderChatItem }
