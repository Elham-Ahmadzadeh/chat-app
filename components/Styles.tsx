import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff1',
  },
  PersonalInfoContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  logo: {
    width: 'auto',
    resizeMode: 'contain',
  },
  enterYourName: {
    alignSelf: 'center',
  },
  nameText: {
    fontSize: 20,
  },
  nameTextInput: {
    borderColor: 'rgba(52, 52, 52, 0.8)',
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 23,
  },
  avatarBig: {
    height: 100,
    width: 100,
    borderRadius: 20,
    marginTop: 15,
    alignSelf: 'center',
  },
  // CHAT
  sendSection: {
    flexDirection: 'row',
    margin: 15,
  },
  chatTextInput: {
    marginRight: 5,
    borderColor: 'rgba(52, 52, 52, 0.8)',
    borderWidth: 1,
    borderRadius: 4,
    flexGrow: 1,
    fontSize: 18,
    paddingTop: 10,
    marginBottom: 30,
    paddingLeft: 3,
    paddingBottom: 6,
  },
  flatListItem: {
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 11,
    marginLeft: 10,
    marginRight: 10,
  },
  chatItemHeader: {
    flexDirection: 'row',
    marginTop: 3,
    marginStart: 10,
  },
  avatarSmall: {
    height: 50,
    width: 50,
    borderRadius: 5,
  },
  smallItalicText: {
    fontSize: 15,
    marginLeft: 11,
    fontStyle: 'italic',
  },
  chatText: {
    fontSize: 22,
    marginStart: 10,
  },
})
