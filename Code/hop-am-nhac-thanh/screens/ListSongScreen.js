import React from 'react';
import {Container, Header, Tab, Tabs} from 'native-base';

import { ScrollView, StyleSheet,View,Text, TouchableOpacity } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import listSongStyle from '../styles/listsong';
import Global from '../Global';
export default class ListSongScreen extends React.Component {
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
      albums: [],
    };
  }
componentWillMount = async () => {

  try {
    const url = Global.BASE_URL+Global.SONG_URL.ROOT+Global.SONG_URL.GET_LIST_POPULARS;
    const response = await fetch (url);
    const songPopulars = await response.json ();

    this.setState ({loading: false, songPopulars});
  } catch (e) {
    this.setState ({loading: false, error: true});
  }

  try {
    const url = Global.BASE_URL+Global.SONG_URL.ROOT+Global.SONG_URL.GET_LIST_NEWS;
    const response = await fetch (url);
    const songNews = await response.json ();

    this.setState ({loading: false, songNews});
  } catch (e) {
    this.setState ({loading: false, error: true});
  }
  
  try {
    const url = Global.BASE_URL+Global.ALBUM_URL.ROOT+Global.ALBUM_URL.GET_LIST;
    const response = await fetch (url);
    const albums = await response.json ();

    this.setState ({loading: false, albums});
  } catch (e) {
    this.setState ({loading: false, error: true});
  }
};

renderPost = ({
    Name,
    Lyric,
    Slug,
    VersionSlug
  }, i) => {
  const {navigate} = this.props.navigation;

  return (
    <View key={i} style={listSongStyle.getItem}>

      <TouchableOpacity
        onPress={() =>
          navigate ('SingleSong', {name: Name, slug: Slug, versionSlug: VersionSlug})}>
        <Text style={listSongStyle.getTitleText}>{Name}</Text>
        {/* <Text style ={listSongStyle.getTitleText}>{Slug}</Text>
            <Text style ={listSongStyle.getTitleText}>{VersionSlug}</Text> */}
        <Text style={listSongStyle.getLyricShortText}>{Lyric}</Text>
      </TouchableOpacity>
    </View>
  );
};
renderAlbum = ({Name, Slug}, i) => {
  const {navigate} = this.props.navigation;

  return (
    <View key={i} style={listSongStyle.getItem}>

      <TouchableOpacity
        onPress={() =>
          navigate ('SongInAlbum', {
            name: Name,
            slug: Slug,
          })}
      >
        <Text style={listSongStyle.getTitleText}>{Name}</Text>
      </TouchableOpacity>
    </View>
  );
};


  render() {
    const {songNews,songPopulars, albums, loading, error} = this.state;

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
          <Tab heading="Album">
            <ScrollView
              style={listSongStyle.container}
              contentContainerStyle={listSongStyle.contentContainer}>
              {albums.map (this.renderAlbum)}
            </ScrollView>
          </Tab>
          {/* <Tab heading="Ca sỹ"></Tab> */}
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
