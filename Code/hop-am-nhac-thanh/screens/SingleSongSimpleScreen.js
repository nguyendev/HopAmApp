import React from 'react';
import 'react-native';

import singleSongStyle from '../styles/singlesong';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
  Tabs,
  Tab,
  Icon,
  View,
} from 'native-base';
import {WebView, StyleSheet, Platform} from 'react-native';
//import {Audio} from 'expo';
//import Icon from 'react-native-vector-icons';

export default class SingleSongSimpleScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.title,
    headerTitleStyle: {
      fontSize: 17,
    },
  });
  constructor (props) {
    super (props);
    this.state = {
      loading: true,
      error: false,
    };
  }
  
  
  render () {
    const {loading, error} = this.state;
    let urlSong =
    'https://hopamnhacthanh.net/searchAdvenced/mobile/q=' +
    this.props.navigation.state.params.url;
    return (
      <Container>
        {/* <Header /> */}
        <Content>
          <WebView
  style={styles.WebViewStyle}
  scalesPageToFit={true}
  scrollEnabled={true}
  source={{uri: urlSong}}
  javaScriptEnabled={true}
  domStorageEnabled={true}
/>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create ({
  WebViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: 1500,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  container1: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});
