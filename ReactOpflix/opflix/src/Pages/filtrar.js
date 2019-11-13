import React, { Component } from 'react';
import { Text, View, TextInput, FlatList, Image, StyleSheet,ScrollView, TouchableOpacity } from 'react-native';

class filtrar extends Component {
  constructor() {
    super();
    this.state = {
      lista: [],
      categorias: []
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
  _categorias = async () => {
    await fetch('http://192.168.3.186:5000/api/Categoria',
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then(response => response.json())
      .then(response => { this.setState({ categorias: response }); this._listar(); })
      .catch(erro => console.warn(erro));
  }
  componentDidMount() {
    this._categorias();
    // this._listar();
  }

  _nulo = () => {
    return (
      <Text>.</Text>
    )
  }

  render() {
    return (
      <View>

        <ScrollView>
        <Text>Filtrar</Text>
        {this.state.categorias.map(item => {
          return (
            <View>

              <Text style={styles.categoria}>{item.nomeCategoria}</Text>
              <FlatList 
              style={styles.flat}
                horizontal={true}
                data={this.state.lista.filter(y => y.categoria === item.idCategoria)}
                keyExtractor={item => item.idLancamento}
                ListEmptyComponent={this._nulo()}
                renderItem={({ item }) => (
                  <View>
                    <Text style={styles.lancamentonome}>{item.nomeLancamento}</Text>
                    <Text style={styles.sinopsefilme}>{item.sinopse}</Text>
                    <Image source={{ uri: item.imagem }} style={styles.imagem} />
                  </View>
                )}
                
                />


            </View>
          )
        })}


        </ScrollView>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  categoria:{
    fontSize:30,
    fontStyle:"italic",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor:"gray"

  },
  imagem:{
    height:600,
    width:350,
    marginRight:10,
    marginLeft:10
  },
  sinopsefilme:{
    fontSize: 15,
    textAlign:"center",

  }

});

export default filtrar;
