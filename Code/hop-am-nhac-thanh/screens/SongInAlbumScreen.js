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

} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import listSongStyle from '../styles/listsong';   
import {Container, Header, Item, Input, Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import SingleSong from '../screens/SingSongScreen';

export default class SongInAlbumScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.name,
    // headerStyle: { backgroundColor: '#511F90' },
    // headerTitleStyle: { color: '#ffff' },
  });
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      posts: [],
      textSearch: '', 
    };
  }
componentWillMount = async () => {
  try {
    const response = await fetch ('https://hopamnhacthanh.net/api/Album/NGUYENIT&q=1&slug='+this.props.navigation.state.params.slug);
    const posts = await response.json ();

    this.setState ({loading: false, posts});
  } catch (e) {
    this.setState ({loading: false, error: true});
  }
};
getDataWithSearch = async (text) => {
  this.setState ({textSearch: text});
  try {
    const response = await fetch ('https://hopamnhacthanh.net/api/Album/NGUYENIT&q='+text+'&slug='+this.props.navigation.state.params.slug);
    const posts = await response.json ();
    this.setState ({loading: false, posts});
  } catch (e) {
    
    this.setState ({loading: false, error: true});
  };
};
renderPost = ({
    Name,
    Number,
    Slug,
    VersionSlug
  }, i) => {
  const { navigate } = this.props.navigation;

  return (
    <View key = {i} style={listSongStyle.getItem}>
      <TouchableOpacity
              onPress={() =>
          navigate('SingleSong', { name: Name, slug: Slug, versionSlug: VersionSlug })}>
      <Text style ={listSongStyle.getTitleText}>{Number}. {Name}</Text>
      {/* <Text style ={listSongStyle.getTitleText}>{Slug}</Text>
      <Text style ={listSongStyle.getTitleText}>{VersionSlug}</Text> */}
      </TouchableOpacity>
    </View>
  );
};



  render() {
    const {posts, loading, error} = this.state

    // if (loading) {
    //   return (
    //     <View>
    //       <ActivityIndicator animating={true} />
    //     </View>
    //   )
    // }

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
          <View style={styles.container}>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.inputStyle}
                underlineColorAndroid="transparent"
                autoCorrect={false}
                placeholder="Tìm kiếm tên bài hát"
                value={this.state.textSearch}
                onChangeText={textSearch => this.getDataWithSearch (textSearch)}
              />
              <Icon style={styles.icon} name="search" color="#000" size={20} />
            </View>
          </View>
          <ScrollView style={listSongStyle.container} contentContainerStyle={listSongStyle.contentContainer}>
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

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
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
    backgroundColor: '#ffff'
  },
  inputStyle: {
    flex: 1,
    fontSize: 16,
    height: 30, 
    borderColor: 'white', 
  },
  icon:{
    height: 30, 
    textAlign: 'center',
    paddingTop: 7,
  }
});
