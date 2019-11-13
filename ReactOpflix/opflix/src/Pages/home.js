import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, FlatList } from 'react-native';
import jwt from "jwt-decode";

class home extends Component {
  constructor() {
    super();
    this.state = {
      nome: "",
      email: "",
      token: "",
    }
  }
  componentDidMount(){
    this._retornarToken();
  }
  _retornarToken = async () => {
    let tokenBuscadoDoStorage = await AsyncStorage.getItem('OpFlix-chave-autenticacao')
    console.warn(tokenBuscadoDoStorage)
    this.setState({ nome: jwt(tokenBuscadoDoStorage).NomeUsuario })
    this.setState({ email: jwt(tokenBuscadoDoStorage).Email })
  }
  render() {
    return (
      <View>
        <Text>{this.state.nome}</Text>
        <Text>{this.state.email}</Text>
      </View>
    );

  }
}

export default home;
