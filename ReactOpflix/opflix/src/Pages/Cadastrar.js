import React, { Component } from 'react';
import { Text,TextInput,View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class cadastrar extends Component {
    constructor() {
        super();
        this.state = {
            nome: "",
            email: "",
            senha: "",

        }

    }

    _cadastrar = async () => {
        await fetch('http://192.168.3.186:5000/api/Usuario', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Email: this.state.email,
                NomeUsuario: this.state.nome,
                senha: this.state.senha,
                Permissao: "COMUM"
            }),
        })
            .then(resposta => resposta.json())
            // .then(data => console.warn(data.token))
            .then( this._voltar())
            .catch(erro => console.warn(erro));
    }
    _voltar = () =>{
        this.props.navigation.navigate('cadastrarScreen')
    }
    render() {
        return (
            <View>

                <TextInput
                    style={styles.inputgeral}
                    placeholder="nome"
                    onChangeText={nome => this.setState({ nome })}
                    value={this.state.nome}
                />
                <TextInput
                    style={styles.inputgeral}
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
                <TouchableOpacity onPress={this._cadastrar}>
                    <Text style={styles.botao}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    inputgeral: {
      paddingLeft: 70,
      paddingRight: 70,
      borderRadius: 30,
      borderColor: "grey",
      borderWidth: 1,
      marginTop: 10,
      marginBottom: 10
  
    },
    botao: {
      backgroundColor: "grey",
      paddingLeft: 70,
      paddingRight: 70,
      paddingTop: 20,
      paddingBottom: 10,
      borderRadius: 30,
      borderColor: "grey",
      borderWidth: 1,
  
      marginTop: 10,
      marginBottom: 10
    }
  });

export default cadastrar;
