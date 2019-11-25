import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, StyleSheet, AsyncStorage, FlatList } from 'react-native';


class login extends Component {
  constructor() {
    super();
    this.state = {
      email: "admin@admin.com",
      senha: "123456"

    }

  }
  static navegationOptions = {
    header: null,
  };

  _realizarLogin = async () => {
    await fetch('http://192.168.3.186:5000/api/Login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        senha: this.state.senha,
      }),
    })
      .then(resposta => resposta.json())
      // .then(data => console.warn(data.token))
      .then(data => this._irParaHome(data.token))
      .catch(erro => console.warn(erro));
  }


  _irParaHome = async tokenAReceber => {
    if (tokenAReceber != null) {
      try {
        await AsyncStorage.setItem('@opflix:token', tokenAReceber);

        this.props.navigation.navigate('MainNavigator')
      } catch (error) { }
    }
  };
  _irparacadastrar = () => {
    this.props.navigation.navigate('cadastrarScreen')
  }

  render() {
    return (
      <View>

        <Image source={require('../imgs/fundo.jpg')} style={styles.img} />
        <View style={styles.arealogar}>
          <View style={styles.Barra}></View>
          <Text style={styles.nomeEstilizacao}>
            Opflix
        </Text>

          <TextInput style={styles.inputgeral}
            placeholder="email"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput
            style={styles.inputgeral}
            placeholder="senha"
            onChangeText={senha => this.setState({ senha })}
            value={this.state.senha}
          />
          <TouchableOpacity onPress={this._realizarLogin}>
            <Text style={styles.botao} >Logar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._irparacadastrar}>
            <Text style={styles.cadastrarEstilizacao} >Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  inputgeral: {
    paddingLeft: 70,
    paddingRight: 70,
    borderRadius: 30,
    borderColor: "#E3E3E3",
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10

  },
  botao: {
    backgroundColor: "#E3E3E3",
    paddingLeft: 70,
    paddingRight: 70,
    paddingTop: 20,
    paddingBottom: 10,
    borderRadius: 30,
    borderColor: "#E3E3E3",
    borderWidth: 1,
    fontSize: 20,
    letterSpacing: 1,
    alignItems: "center",
    color: "black",
    fontFamily: "BebasNeue-Regular",
    marginTop: 10,
    marginBottom: 10
  },

  arealogar: {
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 40
  },
  img: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width:'100%'
  },
  nomeEstilizacao: {
    fontSize: 90,
    letterSpacing: 1,
    color: "red",
    textAlign: "center",
    fontFamily: "BebasNeue-Regular"
  },
  cadastrarEstilizacao: {
    fontSize: 20,
    letterSpacing: 1,
    alignItems: "center",
    color: "black",
    fontFamily: "BebasNeue-Regular"
  }
});

export default login;
