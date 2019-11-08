import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import MainScreen from './Pages/home';
import SignInScreen from './Pages/login';

const AuthStack = createStackNavigator({
  Sign: {screen: SignInScreen},
});

const MainNavigator = createBottomTabNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    Profile: {
      screen: SignInScreen,
    },
  },
  {
    initialRouteName: 'Main',
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      activeBackgroundColor: '#9900e6',
      inactiveBackgroundColor: '#b727ff',
      style: {
        width: '100%',
        height: 50
      }
    }
  },
);

// container
export default createAppContainer(
  createSwitchNavigator(
    {
      MainNavigator,
      AuthStack,
    },
    {
      initialRouteName: 'AuthStack',
    },
  ),
);