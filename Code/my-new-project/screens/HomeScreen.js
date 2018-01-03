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
import Icon from 'react-native-vector-icons/FontAwesome'
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
  loading: true,
  error: false,
  posts: [],
};
componentWillMount = async () => {
  try {
    const response = await fetch ('https://hopamnhacthanh.net/api/Search/NGUYENIT&q='+'1');
    const posts = await response.json ();

    this.setState ({loading: false, posts});
  } catch (e) {
    this.setState ({loading: false, error: true});
  }
};
renderPost = ({
    id,
    Name,
    Lyric
  }, i) => {
  return (
    <View key={id} style={listSongStyle.getItem}>
    
      <Text style ={listSongStyle.getTitleText}>{Name}</Text>

      <Text style ={listSongStyle.getLyricShortText}>{Lyric}</Text>
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
        
        <ScrollView style={listSongStyle.container} contentContainerStyle={listSongStyle.contentContainer}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.inputStyle}
              underlineColorAndroid='transparent'
              autoCorrect={false}
              placeholder="Tìm kiếm tên bài hát"
              value={this.state.password}
              onChangeText={this.onPasswordEntry}
            />
            <Icon style={styles.icon} name="search" color="#000" size={20} />
          </View>
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
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    //borderBottomWidth: 1,
    //borderColor: '#000',
    borderStyle: 'solid',
    borderColor: '#A0A0A0',
    borderWidth: 0.5,
    padding: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 16,
    height: 40, 
    borderColor: 'white', 
  },
  icon:{
    height: 40, 
    textAlign: 'center'
  }
});
