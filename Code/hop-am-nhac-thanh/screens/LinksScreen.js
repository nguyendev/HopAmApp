import React from 'react';
import {Container, Header, Tab, Tabs} from 'native-base';

import { ScrollView, StyleSheet,View,Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import listSongStyle from '../styles/listsong';
export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Bài hát',
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      songNews: [],
      songPopulars: [],
    };
  }
componentWillMount = async () => {

  try {
    const response = await fetch (
      'https://hopamnhacthanh.net/api/Song/NGUYENIT/getPopulars'
    );
    const songPopulars = await response.json ();

    this.setState ({loading: false, songPopulars});
  } catch (e) {
    this.setState ({loading: false, error: true});
  }

  try {
    const response = await fetch (
      'https://hopamnhacthanh.net/api/Song/NGUYENIT/getNews'
    );
    const songNews = await response.json ();

    this.setState ({loading: false, songNews});
  } catch (e) {
    this.setState ({loading: false, error: true});
  }
};

renderPost = ({id, Name, Lyric}, i) => {
  return (
    <View key={id} style={listSongStyle.getItem}>

      <Text style={listSongStyle.getTitleText}>{Name}</Text>

      <Text style={listSongStyle.getLyricShortText}>{Lyric}</Text>
    </View>
  );
};

  render() {
    const {songNews,songPopulars, loading, error} = this.state;

    return (
      <Container>
        {/* <Header hasTabs/> */}
        <Tabs>
          <Tab heading="Mới nhất">
            <ScrollView
              style={listSongStyle.container}
              contentContainerStyle={listSongStyle.contentContainer}>
              {songNews.map (this.renderPost)}
            </ScrollView>
          </Tab>
          <Tab heading="Xem nhiều">
            <ScrollView
              style={listSongStyle.container}
              contentContainerStyle={listSongStyle.contentContainer}>
              {songPopulars.map (this.renderPost)}
            </ScrollView>
          </Tab>
          <Tab heading="Album"></Tab>
          <Tab heading="Ca sỹ"></Tab>
        </Tabs>

      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
