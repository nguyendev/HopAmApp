import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SingleSong from '../screens/SingleSongScreen';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';
import SearchAdvanced from '../screens/SearchAdvancedScreen';
import SingleSongSimple from '../screens/SingleSongSimpleScreen';
import ListAlbum from '../screens/ListAlbumScreen';
import ListCategory from '../screens/ListCategoryScreen';
import SongInAlbum from '../screens/SongInAlbumScreen';
import SongInCategory from '../screens/SongInCategoryScreen';
import ListAuthorSong from '../screens/ListAuthorSongScreen';
import SongInAuthor from '../screens/SongInAuthorScreen';

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
    },
    SearchAdvanced: {
      screen: SearchAdvanced,
    },
    SingleSong: {
      screen: SingleSong,
    },
    SingleSongSimple: {
      screen: SingleSongSimple,
    },
    ListAlbum: {
      screen: ListAlbum,
    },
    ListCategory: {
      screen: ListCategory,
    },
    ListAuthorSong: {
      screen: ListAuthorSong,  
    },
    SongInCategory: {
      screen: SongInCategory,  
    },
    SongInAlbum: {
      screen: SongInAlbum,
    },
    SongInAuthor: {
      screen: SongInAuthor,
    },
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);

export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <RootStackNavigator />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
  };
}
