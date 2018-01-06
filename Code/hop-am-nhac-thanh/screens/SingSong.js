import React from 'react';
import {
} from 'react-native';

import singleSongStyle from '../styles/singlesong';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Tabs,
  Tab,
  View,
} from 'native-base';
import {WebView, StyleSheet, Platform} from 'react-native';
import {Audio} from 'expo';


export default class SingleSong extends React.Component {
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
  componentWillMount = async () => {

  try {
    //  const response = await fetch (
    //    'https://hopamnhacthanh.net/api/Song/NGUYENIT/getSingle/'
    //    +navigation.state.params.slug +'/'+navigation.state.params.versionSlug);
    let response = await fetch (
       'https://hopamnhacthanh.net/api/Song/NGUYENIT/getSingle/doan-dan-giao-uoc/Nguyen-Nguyen-14-75');
    let responseJson = await response.json ();
    let relyric = responseJson.Lyric;
    this.setState ({
        loading: false, 
        lyric: responseJson.Lyric,
    });
  } catch (e) {
    this.setState ({loading: false, error: true});
  }
};
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
ShowHideTextComponentView = () => {
  if (this.state.status == true) {
    this.setState ({status: false});
  } else {
    this.setState ({status: true});
  }
};
renderSelectedTab () {
    const {lyric, loading, error} = this.state;
    
    switch (this.state.selectedTab) {
      case 'song':
        let urlWebView = 'https://hopamnhacthanh.net/bai-hat/fullscreen/doan-dan-giao-uoc/Nguyen-Nguyen-14-75';
         return (
              <WebView style={styles.WebViewStyle} 
              scalesPageToFit={true}
              scrollEnabled={true}
              source={{uri: urlWebView}}
              javaScriptEnabled = {true}
              domStorageEnabled = {true} />
        );
        break;
      case 'audio':
      // let urlAudio ='https://hopamnhacthanh.net/api/Audio/doan-dan-giao-uoc';
      //   const soundObject = new Audio.Sound();
      //   try {
      //     await soundObject.loadAsync({ uri: 'https://hopamnhacthanh.net/audio/dlc-034-chien-lac-tro-ve.mp3'});
      //     await soundObject.playAsync();
      //     // Your sound is playing!
      //   } catch (error) {
      //     // An error occurred!
      //   }
        return (
         <View><Text>Hello1</Text></View>
        );
        break;
      case 'sheet':
      let urlSheet =
  'https://hopamnhacthanh.net/api/Sheet/doan-dan-giao-uoc';

        // return (<Login />);
        break;
      case 'video':
        // return (<Login />);
        break;
      default:
    }
  }
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
                    <Icon name="music" />
                    <Text>Hợp Âm</Text>
                </Button>
                <Button vertical 
               onPress={() => this.setState({selectedTab: 'audio'})} >
                    <Icon name="folder-music" />
                    <Text>Âm Thanh</Text>
                </Button>
                <Button vertical 
               onPress={() => this.setState({selectedTab: 'sheet'})} >
                    <Icon name="page" />
                    <Text>Sheet</Text>
                </Button>
                <Button vertical 
               onPress={() => this.setState({selectedTab: 'video'})} >
                    <Icon name="video" />
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
    height: 1500,
    marginTop: (Platform.OS) === 'ios' ? 20 : 0
 }
});