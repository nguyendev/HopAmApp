import React from 'react';
import {
} from 'react-native';
import Global from '../Global';
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


export default class SingleSongScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.name,
    headerTitleStyle: {
        fontSize: 17,
   },
  });
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      lyric: 'fj',
      selectedTab: 'song'

    };
  }
//   componentWillMount = async () => {
//   try {
//       const response = await fetch (
//         'https://hopamnhacthanh.net/api/Song/NGUYENIT/getSingle/'
//         +navigation.state.params.slug +'/'+navigation.state.params.versionSlug);
//      let response = await fetch (
//         'https://hopamnhacthanh.net/api/Song/NGUYENIT/getSingle/doan-dan-giao-uoc/Nguyen-Nguyen-14-75');
//      let responseJson = await response.json ();
//      let relyric = responseJson.Lyric;
//      this.setState ({
//          loading: false, 
//          lyric: responseJson.Lyric,
//      });
//   } catch (e) {
//     this.setState ({loading: false, error: true});
//   }
// };
// renderSingleSong = async () => {
//   const {navigate} = this.props.navigation;

//   return (
//     <View>
//        {/* <Text>{song.Name}</Text>
//        <Text>{song.Text}</Text> */}
//        <Text>Ngfuye akjdfsa kljasfd kljas d</Text>;
//     </View>
//   );
// };
  renderSelectedTab () {
      const {lyric, loading, error} = this.state;
      const slug = this.props.navigation.state.params.slug;
      const versionSlug = this.props.navigation.state.params.versionSlug;
      switch (this.state.selectedTab) {
        case 'song':       
          let urlSong = Global.BASE_URL+Global.WEB_VIEW_URL.SIMPLE_SONG_WITH_SLUG_VERSION
          +slug + '/' + versionSlug;
          return (
            <WebView style={styles.WebViewStyle} 
                scalesPageToFit={true}
                scrollEnabled={true}
                source={{uri: urlSong}}
                javaScriptEnabled = {true}
                domStorageEnabled = {true} />
          );
          break;
        case 'audio':
        let urlAudio = Global.BASE_URL+Global.WEB_VIEW_URL.AUDIO + slug;
          return (
            <WebView style={styles.WebViewStyle} 
                scalesPageToFit={true}
                scrollEnabled={true}
                source={{uri: urlAudio}}
                javaScriptEnabled = {true}
                domStorageEnabled = {true} />
          );
          break;
        case 'sheet':
          let urlSheet = Global.BASE_URL+Global.WEB_VIEW_URL.SHEET+ slug;
          return (
            <WebView style={styles.WebViewStyle} 
                scalesPageToFit={true}
                scrollEnabled={true}
                source={{uri: urlSheet}}
                javaScriptEnabled = {true}
                domStorageEnabled = {true} />
          );
          break;
        case 'video':
          let urlVideo = Global.BASE_URL+Global.WEB_VIEW_URL.VIDEO+ slug;
          return (
            <WebView style={styles.WebViewStyle} 
                scalesPageToFit={true}
                scrollEnabled={true}
                source={{uri: urlVideo}}
                javaScriptEnabled = {true}
                domStorageEnabled = {true} />
          );
          break;
        default:
      }
  };
  render () {
      const {lyric, loading, error} = this.state;
        //  if (loading) {
        //     return (
        //         <View>
        //         <Text>Loading</Text>
        //         </View>
        //     )
        //     }

        //     if (error) {
        //     return (
        //         <View>
        //         <Text>
        //             Failed to load posts!
        //         </Text>
        //         </View>
        //     )
        //     }

    return (
        <Container>
            {/* <Header /> */}
            <Content>
                {this.renderSelectedTab()}
            </Content>
            <Footer>
                <FooterTab>
                <Button vertical active={this.state.selectedTab==='song'} 
               onPress={() => this.setState({selectedTab: 'song'})} >
                    <Icon name="ios-musical-notes" />
                    <Text>Hợp Âm</Text>
                </Button>
                <Button vertical 
               onPress={() => this.setState({selectedTab: 'audio'})} >
                    <Icon name="ios-headset" />
                    <Text>Âm Thanh</Text>
                </Button>
                <Button vertical 
               onPress={() => this.setState({selectedTab: 'sheet'})} >
                    <Icon name="ios-photos-outline" />
                    <Text>Sheet</Text>
                </Button>
                <Button vertical 
               onPress={() => this.setState({selectedTab: 'video'})} >
                    <Icon name="ios-easel" />
                    <Text>Video</Text>
                </Button>
                </FooterTab>
            </Footer>
        </Container>

    );
  }
}
const styles = StyleSheet.create({
 WebViewStyle:
 {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    height: 2000,
    marginTop: (Platform.OS) === 'ios' ? 20 : 0
 }
});