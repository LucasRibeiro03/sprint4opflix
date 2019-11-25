import React, { Component } from 'react';
import { Text, TextInput, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
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
            .then(this._voltar())
            .catch(erro => console.warn(erro));
    }

    _Voltar = () => {
        this.props.navigation.navigate('AuthStack')
    }
    render() {
        return (
            <View style={styles.areaCadastrar}>
                <Image source={require('../imgs/fundo.jpg')} style={styles.img} />
                <View style={styles.Barra}></View>
                <Text style={styles.titulo} >cadastrar</Text>
                <View style={styles.Barra}></View>
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

                <TouchableOpacity onPress={this._Voltar}>
                    <Text style={styles.botao}>Voltar</Text>
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
        marginLeft:40,
        marginRight:40,
        borderColor: "#E3E3E3",
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10

    },
    areaCadastrar: {
        alignItems: "center",
        flexDirection: "column",
        paddingTop: 75
      },
    img: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width:'100%'
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
    },
    titulo: {
        fontSize: 40,
        letterSpacing: 5,
        textAlign:"center",
        color: "red",
        fontFamily: "BebasNeue-Regular"
      },Barra:{
        backgroundColor:"#E3E3E3",
        height:10 ,
        width:"100 %"
      }
});

export default cadastrar;
