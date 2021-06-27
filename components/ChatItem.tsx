import React from 'react'
import { View, Image, Text } from 'react-native'
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
  return (
    <View
      style={[
        Styles.flatListItem,
        { borderColor: username == chatItem.by ? 'green' : 'blue' },
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
    </View>
  )
}
export { ChatItem, RenderChatItem }
