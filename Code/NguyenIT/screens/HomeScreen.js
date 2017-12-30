import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,


  // StatusBar
} from 'react-native';
import {TabNavigator,
    SafeAreaView

} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />;

const MyNavScreen = ({navigation, banner}) => (
  <SafeAreaView forceInset={{horizontal: 'always', top: 'always'}}>
    {/* <SampleText>{banner}</SampleText> */}
    <Button
      onPress={() => navigation.navigate ('Home')}
      title="Go to home tab"
    />

    <Button
      onPress={() => navigation.navigate ('Settings')}
      title="Go to settings tab"
    />
    <Button onPress={() => navigation.goBack (null)} title="Go back" />
    {/* <StatusBar barStyle="default" /> */}
  </SafeAreaView>
);
const MyHomeScreen = ({navigation}) => (
  <MyNavScreen banner="Home Tab" navigation={navigation} />
);
MyHomeScreen.navigationOptions = {
  tabBarTestIDProps: {
    testID: 'TEST_ID_HOME',
    accessibilityLabel: 'TEST_ID_HOME_ACLBL',
  },
  tabBarLabel: 'Trang chủ',
//   tabBarIcon: ({ tintColor }) => (
//       <Image
//         source={require('./images/icons/home-icon.png')}
//         // style={[styles.icon, {tintColor: tintColor}]}
//       />
//     ),

};

const MyNewSong = ({navigation}) => (
  <MyNewSong banner="People Tab" navigation={navigation} />
);

MyNewSong.navigationOptions = {
  tabBarLabel: 'Bài hát mới',
  tabBarIcon: ({tintColor, focused}) => (
    <Ionicons
      name={focused ? 'ios-people' : 'ios-people-outline'}
      size={26}
      style={{color: tintColor}}
    />
  ),
};

const HomeScreen = TabNavigator (
  {
    Home: {
      screen: MyHomeScreen,
      path: '',
    },
    NewSong: {
      screen: MyNewSong,
      path: 'cart',
    },
    // Tool: {
    //   screen: MyChatScreen,
    //   path: 'chat',
    // },
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
    },
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

export default HomeScreen;



