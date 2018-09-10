// index in layouts folder
import React from 'react';
import {
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import Login from './Login';
import SignUp from './SignUp';
import Home from '../screen/Home';
import Account from '../screen/Account';
import Grocery from '../screen/Grocery';
import DrawerComponent from '../screen/DrawerComponent';
import Place from '../screen/Place';

const tab = createBottomTabNavigator(
  {
    home: Home,
    drawer: DrawerComponent,
    place: Place,
    grocery: Grocery,
    account: Account,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'drawer') {
          iconName = `ios-stats${focused ? '' : '-outline'}`;
        } else if (routeName === 'place') {
          iconName = `ios-pin${focused ? '' : '-outline'}`;
        } else if (routeName === 'account') {
          iconName = `ios-person${focused ? '' : '-outline'}`;
        } else if (routeName === 'grocery') {
          iconName = `ios-cart${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'black',

      style: {
        shadowOffset: {
          width: 500,
          height: 500,
        },
        backgroundColor: '#fff',
        shadowOpacity: 100,
        shadowColor: '#000',
      },
    },
  }
);

export default createSwitchNavigator(
  {
    signUp: SignUp,
    login: Login,
    tab,
  },
  {
    initialRouteName: 'login',
  }
);
