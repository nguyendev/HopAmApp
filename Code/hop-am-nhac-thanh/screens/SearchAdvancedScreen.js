import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
  TextInput,
} from 'react-native';
import listSongStyle from '../styles/listsong';
import Icon from 'react-native-vector-icons/FontAwesome';
import SingleSongSimple from '../screens/SingleSongSimpleScreen';
import Global from '../Global';
export default class SearchAdvancedScreen extends React.Component {
  static navigationOptions = {
    title: 'Tìm kiếm nâng cao',
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
      textSearch: '',
    };
  }
   componentWillMount = async () => {
      try {
        const url = Global.BASE_URL+Global.SEARCH_ADVANCED_URL.ROOT+Global.SEARCH_ADVANCED_URL.GET_SEARCH+'Chúa';
        const response = await fetch (url);
        
        const posts = await response.json ();
        this.setState ({loading: false, posts});
      } catch (e) {
        this.setState ({loading: false, error: true});
      }
   };
  getDataWithSearch = async text => {
    this.setState ({textSearch: text});
    try {
      const url = Global.BASE_URL+Global.SEARCH_ADVANCED_URL.ROOT+Global.SEARCH_ADVANCED_URL.GET_SEARCH+text;
      const response = await fetch (url);
        
      const posts = await response.json ();
      let count = Object.keys (posts).length;
      if (count <= 0) {
        this.setState ({loading: false, postsNotFound: true});
      } else {
        this.setState ({loading: false, posts, postsNotFound: false});
      }

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
            navigate ('SingleSongSimple', {
               title: Title,
               url: URL,        
            })}>
          <Text style={listSongStyle.getTitleText}>{Title}</Text>
          <Text style={listSongStyle.getLyricShortText}>{Description}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render () {
    const {posts, loading, error, postsNotFound} = this.state;
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
                <Text style={{marginLeft: 15, marginRight: 15}}>Không tìm thấy. Vui lòng thử từ khóa khác</Text>
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

    //  if (error) {
    //    return (
    //      <View>
    //        <Text>
    //          Failed to load posts!
    //        </Text>
    //      </View>
    //    )
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
