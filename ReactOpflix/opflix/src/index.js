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
    Perfil: {
      screen: MainScreen,
    },
    Filtrar: {
      screen: filtrarScreen,
    },
  },
  {
    initialRouteName: 'Perfil',
    tabBarOptions: {
      labelStyle: {
        fontSize: 17,
        fontFamily: 'BebasNeue-Regular'
      },
      showLabel: true,
      style:{
        backgroundColor: '#000000',
      },
      showIcon: true,
      activeBackgroundColor: '#BF0000',
      inactiveBackgroundColor: '#870000',
      style: {
        width: '100%',
        height: 50,
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