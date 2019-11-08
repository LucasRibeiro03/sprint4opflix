import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

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
      <Text>Olá Usuário</Text>
    );
  }
}

export default App;
