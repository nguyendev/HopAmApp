/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity

  // StatusBar
} from 'react-native';
import {StackNavigator} from 'react-navigation';

import HomeScreen from './screens/HomeScreen.js';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const App = StackNavigator ({
  Home: {screen: HomeScreen},
  // Profile: {screen: ProfileScreen},
});

export default App;


// class App extends Component {
//   renderScene(route,navigator){
//     switch(route.name){
//       case "searchMain" : return(<SearchMain clickMe={()=>{
//         navigator.push ({
//           name: 'singleForSong',
//           passProps: {ho:"Pham", Ten:"Nguyen"}
//         });
//       }}/>);
//       case "singleForSong" : return(<SingleForSong clickBack={()=>{
//         navigator.pop ({name: 'searchMain'});
//       }}/>);
//     }
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Navigator  
//           initialRoute={{name:"searchMain"}}
//           renderScene={this.renderScene}>
//         </Navigator>
//       </View>
//     );
//   }
// }
// export class SingleForSong extends Component{
//     return(){
//        <View>
//          <TouchableOpacity
//   onPress={() => {
//     this.props.clickBack;
//   }}
// >
//   <Text>Back To Main</Text>
// </TouchableOpacity>;

//        </View>
//     }
// }
// export class SearchMain extends Component{
//     return(){
//        <View>
//          <TouchableOpacity onPress={()=>{this.props.clickMe}}>
//          <Text>Go To SingleForSong</Text>
//          </TouchableOpacity>
//        </View>
//     }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   searchBar: {
//   paddingLeft: 30,
//   fontSize: 22,
//   height: 10,
//   flex: 1,
//   borderWidth: 9,
//   borderColor: '#E4E4E4',
// },


// });


