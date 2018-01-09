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
import {WebBrowser} from 'expo';
import listSongStyle from '../styles/listsong';
import Icon from 'react-native-vector-icons/FontAwesome';
import SingleSong from '../screens/SingSongScreen';

export default class SearchAdvancedScreen extends React.Component {
  static navigationOptions = {
    title: 'Tính năng',
    // headerStyle: { backgroundColor: '#511F90' },
    // headerTitleStyle: { color: '#ffff' },
  };
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
    //  try {
    //    const response = await fetch (
    //     'https://hopamnhacthanh.net/api/SearchAdvanced/NGUYENIT/q=Chua'
    //    );
    //    const posts = await response.json ();

    //    this.setState ({loading: false, posts});
    //  } catch (e) {
    //    this.setState ({loading: false, error: true});
    //  }
   };
  getDataWithSearch = async text => {
    this.setState ({textSearch: text});
    try {
      const response = await fetch (
        'https://hopamnhacthanh.net/api/SearchAdvanced/NGUYENIT/q=' + text
      );
      const posts = await response.json ();
      this.setState ({loading: false, posts});
    } catch (e) {
      this.setState ({loading: false, error: true});
    }
  };
  renderPost = ({Title, Description, URL}, i) => {
    const {navigate} = this.props.navigation;

    return (
      <View key={i} style={listSongStyle.getItem}>
        <TouchableOpacity
          onPress={() =>
            navigate ('SingleSong', {
               title: Title,
               url: URL,        
            })}>
          <Text style={listSongStyle.getTitleText}>{Title}</Text>;

          {/* <Text style ={listSongStyle.getTitleText}>{Slug}</Text>
      <Text style ={listSongStyle.getTitleText}>{VersionSlug}</Text> */}
          <Text style={listSongStyle.getLyricShortText}>{Description}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render () {
    const {posts, loading, error} = this.state;

     if (loading) {
       return (
         <View>
           <Text>
             ĐANG TẢI
           </Text>
         </View>
       )
     }

     if (error) {
       return (
         <View>
           <Text>
             Failed to load posts!
           </Text>
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
        <ScrollView
          style={listSongStyle.container}
          contentContainerStyle={listSongStyle.contentContainer}>
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
