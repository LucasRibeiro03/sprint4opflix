import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity, AsyncStorage } from 'react-native';
import jwt from "jwt-decode";
import font from "react-native-font";
class home extends Component {
  constructor() {
    super();
    this.state = {
      nome: "",
      email: "",

    }
  }
  componentDidMount() {
    this._retornarToken();
  }
  _retornarToken = async () => {
    // console.warn(await AsyncStorage.getItem('@opflix:token'))
    let token = await AsyncStorage.getItem('@opflix:token')
    // console.warn(jwt(tokenBuscadoDoStorage))
    this.setState({ nome: jwt(token).Username })
    this.setState({ email: jwt(token).email })

  }

  _Deslogar = () => {
    AsyncStorage.removeItem('@opflix:token');
    this.props.navigation.navigate('AuthStack')
  }
  render() {
    return (
      <View>
        <View style={styles.Barra}></View>
        <Text style={styles.nomeEstilizacao}>Bem vindo(a) : {this.state.nome}</Text>
        <View style={styles.Barra}></View>
        <Text>{this.state.email}</Text>
        <TouchableOpacity onPress={this._Deslogar}>
          <Text style={styles.botao}>Deslogar</Text>
        </TouchableOpacity>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  nomeEstilizacao: {
    fontSize: 40,
    letterSpacing: 5,
    alignItems:"center",
    color: "red",
    fontFamily: "BebasNeue-Regular"
  },Barra:{
    backgroundColor:"#E3E3E3",
    height:10 ,
    width:"100 %"
  },
  botao: {
    backgroundColor: "#E3E3E3",
    paddingLeft: 70,
    paddingRight: 70,
    marginLeft:40,
    marginRight:40,
    paddingTop: 20,
    paddingBottom: 10,
    borderRadius: 30,
    borderColor: "#E3E3E3",
    borderWidth: 1,
    textAlign: "center",
    fontSize: 20,
    letterSpacing: 1,
    alignItems: "center",
    color: "black",
    fontFamily: "BebasNeue-Regular",
    marginTop: 10,
    marginBottom: 10
}
});
export default home;

