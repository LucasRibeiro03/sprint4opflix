import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

class  filtrar extends Component{
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
      <Text>Filtrar</Text>
    );
  }
}

export default filtrar;
