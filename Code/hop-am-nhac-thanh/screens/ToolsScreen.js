import React from 'react';
import {Container,Content, Header, Item, Input,Text, Button, Icon} from 'native-base';
import SearchAdvanced from '../screens/SearchAdvancedScreen';

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
         
        <Content>
          <Text></Text>
          <Button iconLeft full success onPress={() =>
            navigate ('SearchAdvanced')}>
            <Icon name='ios-search'/>
            <Text>Tìm kiếm nâng cao</Text>
          </Button>
          <Text></Text>
          <Button iconLeft full success>
            <Icon name="ios-search" />
            <Text>Tìm kiếm nâng cao</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

