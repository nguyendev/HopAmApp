import React from 'react';
import {Container,Content, Header, Item, Input,Text, Button, Icon} from 'native-base';
import SearchAdvanced from '../screens/SearchAdvancedScreen';
import ListAlbum from '../screens/ListAlbumScreen';
import ListCategory from '../screens/ListCategoryScreen';
import ListAuthorSong from '../screens/ListAuthorSongScreen';
import Global from '../Global';
export default class ToolsScreen extends React.Component {
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
    // try {
    //   const response = await fetch (
    //     'https://hopamnhacthanh.net/api/Search/NGUYENIT&q=' + '1'
    //   );
    //   const posts = await response.json ();

    //   this.setState ({loading: false, posts});
    // } catch (e) {
    //   this.setState ({loading: false, error: true});
    // }
  };
  
  
  render () {
    const {navigate} = this.props.navigation;

    // const {posts, loading, error} = this.state;
    return (
      <Container>
        <Content style={{marginLeft:30, marginRight:30}}>
          <Button style={{marginBottom: 20, marginTop: 20}} iconLeft block success onPress={() =>
            navigate ('SearchAdvanced')}>
            <Icon name='ios-search'/>
            <Text>Tìm kiếm nâng cao</Text>
          </Button>
          <Button style={{marginBottom: 20}} iconLeft block info onPress={() =>
            navigate ('ListAlbum')}>
            <Icon name="ios-albums" />
            <Text>Album</Text>
          </Button>
          <Button style={{marginBottom: 20}} iconLeft block danger onPress={() =>
            navigate ('ListCategory')}>
            <Icon name="ios-list-box" />
            <Text>Danh mục</Text>
          </Button>
          <Button style={{marginBottom: 20}} iconLeft block warning onPress={() =>
            navigate ('ListAlbum')}>
            <Icon name="ios-musical-note" />
            <Text>Ca sỹ</Text>
          </Button>
          <Button style={{marginBottom: 20}} iconLeft block onPress={() =>
            navigate ('ListAuthorSong')}>
            <Icon name="ios-people" />
            <Text>Tác giả bài hát</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

