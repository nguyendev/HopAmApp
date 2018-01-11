import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {WebBrowser} from 'expo';

import {MonoText} from '../components/StyledText';
import listSongStyle from '../styles/listsong';
import {Container, Header, Item, Input, Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import SingleSong from '../screens/SingSongScreen';
import SongInCategory from '../screens/SongInCategoryScreen';
const GLOBAL = require ('../Global');
export default class ListSingleSongScreen extends React.Component {
  static navigationOptions = {
    title: 'Danh mục',
    // headerStyle: { backgroundColor: '#511F90' },
    // headerTitleStyle: { color: '#ffff' },
  };
  constructor (props) {
    super (props);
    this.state = {
      loading: true,
      error: false,
      posts: [],
      postsNotFound: false,
    };
  }
  componentWillMount = async () => {
    try {
      const url =
        Global.BASE_URL +
        Global.CATEGORY_URL.ROOT +
        Global.CATEGORY_URL.GET_LIST;
      const response = await fetch (url);
      const posts = await response.json ();
      this.setState ({loading: false, posts});
    } catch (e) {
      this.setState ({loading: false, error: true});
    }
  };

  renderPost = ({Name, Slug}, i) => {
    const {navigate} = this.props.navigation;

    return (
      <View key={i} style={listSongStyle.getItem}>
        <TouchableOpacity
          onPress={() =>
            navigate ('SongInCategory', {
              name: Name,
              slug: Slug,
            })}
        >
          <Text style={listSongStyle.getTitleText}>{Name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render () {
    const {posts, loading, error, postsNotFound, textSearch} = this.state;
    const {navigate} = this.props.navigation;
    if (loading) {
      return (
        <View style={[styles.container1, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    return (
      <View style={listSongStyle.container}>
        <ScrollView
          style={listSongStyle.container}
          contentContainerStyle={listSongStyle.contentContainer}
        >
          {posts.map (this.renderPost)}
        </ScrollView>
        {/* <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>
                Help, it didn’t automatically reload!
              </Text>
            </TouchableOpacity>
          </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    // backgroundColor: '#BEBEBE',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 15,
    marginLeft: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderColor: '#000000',
    borderWidth: 0.5,
    padding: 10,
    backgroundColor: '#ffff',
  },
  inputStyle: {
    flex: 1,
    fontSize: 16,
    height: 30,
    borderColor: 'white',
  },
  icon: {
    height: 30,
    textAlign: 'center',
    paddingTop: 7,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
