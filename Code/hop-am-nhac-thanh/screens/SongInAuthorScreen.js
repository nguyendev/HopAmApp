import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import {WebBrowser} from 'expo';

import {MonoText} from '../components/StyledText';
import listSongStyle from '../styles/listsong';
import {Container, Header, Item, Input, Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import SingleSong from '../screens/SingleSongScreen';
import Global from '../Global';
export default class SongInAuthorScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.name,
    // headerStyle: { backgroundColor: '#511F90' },
    // headerTitleStyle: { color: '#ffff' },
  });
  constructor (props) {
    super (props);
    this.state = {
      loading: true,
      error: false,
      posts: [],
      textSearch: '',
    };
  }
  componentWillMount = async () => {
    try {
      const url =
        Global.BASE_URL +
        Global.AUTHOR_SONG_URL.ROOT +
        Global.AUTHOR_SONG_URL.GET_LIST_WITH_SLUG +
        this.props.navigation.state.params.slug;
      const response = await fetch (url);
      const data = await response.json ();
      const result = data.Result;
      const posts = data.Result.ListSong;

      this.setState ({loading: false, posts});
    } catch (e) {
      this.setState ({loading: false, error: true, url});
    }
  };

  renderPost = ({Name, Number, Slug, VersionSlug}, i) => {
    const {navigate} = this.props.navigation;

    return (
      <View key={i} style={listSongStyle.getItem}>
        <TouchableOpacity
          onPress={() =>
            navigate ('SingleSong', {
              name: Name,
              slug: Slug,
              versionSlug: VersionSlug,
            })}
        >
          <Text style={listSongStyle.getTitleText}>{Number}. {Name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render () {
    const {posts, loading, error} = this.state;

     if (loading) {
       return (
         <View>
           <ActivityIndicator animating={true} />
         </View>
       )
     }

    // if (error) {
    //   return (
    //     <View>
    //       <Text>
    //         Failed to load posts!
    //       </Text>
    //     </View>
    //   )
    // }

    return (
      <View style={listSongStyle.container}>
        {/* <View style={{marginLeft: 10, marginRight: 10, fontSize: 16}}>
        <Text>Thông tin tác giả: Chưa có thông tin</Text>
        <Text>Danh sách bài hát</Text>
        </View> */}
        <ScrollView
          style={listSongStyle.container}
          contentContainerStyle={listSongStyle.contentContainer}
        >
          {posts.map (this.renderPost)}
        </ScrollView>
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
});
