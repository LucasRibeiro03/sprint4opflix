import React, { Component } from 'react';
import { Text, View, TextInput, FlatList, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

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
      <Text style={styles.semtexto}>Nenhum Filme cadastrado</Text>
    )
  }


  render() {
    return (
      <View style={styles.areafiltrar}>

        <ScrollView>
          <View style={styles.Barra}></View>
          <Text style={styles.nomeEstilizacao} >Filmes</Text>
          <View style={styles.Barra}></View>
          {this.state.lista.map(item => {
            return (
              <View>
                
                <Text style={styles.categoria}>{item.nomeLancamento}</Text>
                
                
                <Image source={{ uri: item.imagem }} style={styles.imagem} />
              </View>
            )
            // return (
            //   <View>
            //     <View style={styles.Barra}></View>
            //     <Text style={styles.categoria}>{item.nomeCategoria}</Text>
            //     <View style={styles.Barra}></View>
            //     <FlatList
            //       style={styles.flat}
            //       horizontal={true}
            //       data={this.state.lista.filter(y => y.categoria === item.idCategoria )}
            //       keyExtractor={item => item.idLancamento}
            //       ListEmptyComponent={this._nulo()}
            //       renderItem={({ item }) => (
            //         <View>
            //           <Text style={styles.lancamentonome}>{item.nomeLancamento}</Text>

            //           <Image source={{ uri: item.imagem }} style={styles.imagem} />
            //         </View>
            //       )}

            //     />


            //   </View>
            // )

          })}
        </ScrollView>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  categoria: {
    fontSize: 20,
    letterSpacing: 1,
    textAlign: "center",
    color: "black",
    fontFamily: "BebasNeue-Regular",
    borderRadius: 40,
    borderColor :"#E3E3E3",
    borderWidth : 10,
    marginHorizontal: 50,

  },
  imagem: {
    height: 300,
    width: 200,
    marginVertical:10,
    borderRadius: 15,
    borderWidth: 5,
    borderColor: '#E3E3E3',
    alignSelf:"center",
  },
  sinopsefilme: {
    fontSize: 15,
    textAlign: "center",
  },
  nomeEstilizacao: {
    fontSize: 40,
    letterSpacing: 5,
    textAlign: "center",
    color: "red",
    fontFamily: "BebasNeue-Regular"
  }, Barra: {
    backgroundColor: "#E3E3E3",
    height: 10,
    width: "100 %"
  },
  areafiltrar: {
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 20
  },
  semtexto: {
    fontSize: 20,
    letterSpacing: 1,
    textAlign: "center",
    color: "#E3E3E3",
    fontFamily: "BebasNeue-Regular"
  }
});

export default filtrar;
