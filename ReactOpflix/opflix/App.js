/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment,Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class  App extends Component{
  constructor(){
    super();
    this.state = {
      lista:""

    }

  }
  componentDidMount(){
    
  }
  
  render(){
    return(
      <Text>Olá</Text>
    );
  }
}

export default App;
