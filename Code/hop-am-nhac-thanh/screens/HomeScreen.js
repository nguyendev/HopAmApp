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
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import listSongStyle from '../styles/listsong';   
import {Container, Header, Item, Input, Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import SingleSong from '../screens/SingSongScreen';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Hợp Âm Nhạc Thánh',
    // headerStyle: { backgroundColor: '#511F90' },
    // headerTitleStyle: { color: '#ffff' },
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
      posts: [],
      textSearch: '', 
      postsNotFound: false,
    };
  }
componentWillMount = async () => {
  try {
    const response = await fetch ('https://hopamnhacthanh.net/api/Search/NGUYENIT&q='+'1');
    const posts = await response.json ();
    this.setState ({loading: false, posts});

  } catch (e) {
    this.setState ({loading: false, error: true});
  }
};
getDataWithSearch = async (text) => {
  this.setState ({textSearch: text});
  try {
    const response = await fetch ('https://hopamnhacthanh.net/api/Search/NGUYENIT&q='+text);
    const posts = await response.json ();
    let count = Object.keys(posts).length;
    if (count <= 0) {
      this.setState ({loading: false, postsNotFound: true});
    } else {
      this.setState ({loading: false, posts, postsNotFound: false});
    }
  } catch (e) {
    
    this.setState ({loading: false, error: true});
  };
  
};
renderPost = ({
    Name,
    Lyric,
    Slug,
    VersionSlug
  }, i) => {
  const { navigate } = this.props.navigation;
  
  return (
    <View key = {i} style={listSongStyle.getItem}>
      <TouchableOpacity
              onPress={() =>
          navigate('SingleSong', { name: Name, slug: Slug, versionSlug: VersionSlug })}>
      <Text style ={listSongStyle.getTitleText}>{Name}</Text>
      {/* <Text style ={listSongStyle.getTitleText}>{Slug}</Text>
      <Text style ={listSongStyle.getTitleText}>{VersionSlug}</Text> */}
      <Text style ={listSongStyle.getLyricShortText}>{Lyric}</Text>
      </TouchableOpacity>
    </View>
  );
};

  render() {
    const {posts, loading, error, postsNotFound,textSearch} = this.state
    const {navigate} = this.props.navigation;

    if(postsNotFound)
    {
       return(
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
              <Icon style={styles.ivcon} name="search" color="#000" size={20} />
            </View>
            <View style={{marginTop: 30,justifyContent: 'center',borderRadius: 4, borderWidth: 0.5,borderColor: '#000000',backgroundColor: '#FACE9C',color: '#0000'}}>
                <Text style={{margin: 10}}>Không tìm thấy! Bạn có thể thử tìm với từ khóa khác. Hoặc thử tìm kiếm nâng cao</Text>
                <Text style={{margin: 10}}>
                  Lưu ý: Tìm kiếm nâng cao sẽ bị giới hạn tính năng khi tìm thấy bài hát
                </Text>
                
            </View>
            <View>
              <Text></Text>
              <Text></Text>
              <Button iconLeft full success onPress={() => navigate ('SearchAdvanced',{ search: textSearch, name: "Hello"})}>
                <Icon style={{color: '#ffff'}} name="search" />
                <Text style={{color: '#ffff'}}> Tìm kiếm nâng cao</Text>
              </Button>
            </View>
          </View>
        </View>
      )
    }
    if(loading)
    {
      return (
      <View style={[styles.container1, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
      )
    }
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
