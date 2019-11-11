import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, FlatList } from 'react-native';

class home extends Component {
  constructor() {
    super();
    this.state = {
      lista: []
    }


  }
  _listar = async () => {
    await fetch('http://192.168.3.186:5000/api/Lancamento',
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then(response => response.json())
      .then(response => { this.setState({ lista: response }) })
      .catch(erro => console.warn(erro));
  }
  componentDidMount() {
    this._listar();
  }
  render() {
    return (
      <View>

        <FlatList
          data={this.state.lista}
          keyExtractor={item => item.IdLancamento}
          renderItem={({ item }) => (
            <View>
              <Text>{item.nomeLancamento}</Text>
            </View>
          )}

        />
      </View>
    );
  }
}

export default home;
