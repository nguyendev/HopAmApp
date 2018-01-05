import React, {StyleSheet} from 'react-native';

export default StyleSheet.create ({
  container: {
    flex: 1,
    //marginTop: 20,
    backgroundColor: '#fff',
    padding: 5,
  },
  banner:{
    flex: 1,
  },

  Image:{
    width: 65,
    height: 65,
  },
  textLogo:{
    fontSize: 16
  },

  contentContainer: {
    //paddingTop: 30,
  },
  getItem: {
    borderStyle: 'solid',
    borderBottomColor: '#A0A0A0',
    borderBottomWidth: 0.5,
    padding: 10,
  },
  getTitleText: {
    textAlign: 'left',
    fontSize: 18,

  },
  getLyricShortText: {
    textAlign: 'left',
    fontSize: 16,
    color: '#BDBDBD',
  },
});
