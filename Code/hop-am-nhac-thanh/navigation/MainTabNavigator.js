import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ListSongScreen from '../screens/ListSongScreen';
import ToolsScreen from '../screens/ToolsScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Trang chủ',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    ListSong: {
      screen: ListSongScreen,
      navigationOptions: {
        tabBarLabel: 'Bài hát',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-musical-notes' : 'ios-musical-notes-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    Tools: {
      screen: ToolsScreen,
      navigationOptions: {
        tabBarLabel: 'Tính năng',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-construct' : 'ios-construct-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: 'Giới thiệu',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? 'ios-information-circle' : 'ios-information-circle-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
