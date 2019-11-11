import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import MainScreen from './Pages/home';
import SignInScreen from './Pages/login';
import filtrarScreen from './Pages/filtrar';
import cadastrarScreen from './Pages/Cadastrar';

const AuthStack = createStackNavigator({
  Sign: {screen: SignInScreen},
});

const MainNavigator = createBottomTabNavigator(
  {
    Main: {
      screen: MainScreen,
    },
    Profile: {
      screen: filtrarScreen,
    },
  },
  {
    initialRouteName: 'Main',
    tabBarOptions: {
      showLabel: true,
      style:{
        backgroundColor: '#000000'
      },
      showIcon: true,
      activeBackgroundColor: '#aaaaaa',
      inactiveBackgroundColor: '#bbbbbb',
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
      cadastrarScreen,
      AuthStack,
    },
    {
      initialRouteName: 'AuthStack',
    },
  ),
);