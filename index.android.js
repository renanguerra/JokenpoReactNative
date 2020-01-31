/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import Topo from './src/components/topo.js';
import Icone from './src/components/Icone.js'


const estilos = {
  botao: {
    padding: 10,
    width: 120,
  },
  principal: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  texto: {
    alignItems: 'center',
    marginTop: 10,
  },
  resultado: {
    fontSize: 25,
    marginBottom: 10,
    color: 'red',
  },
  textoNome: {
    alignSelf: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    marginTop: 10,
  }
}

class ServosTeste extends Component{

  constructor(props){
    super(props);

    this.state = {user:'',comp: '', resu: ''};
  }

  jokenpo(user){
    this.setState({user : user});
    let a = Math.random() * 3;
    let b = Math.floor(a);

    switch(b){
      case 0 : this.setState({comp: 'Pedra'}); break;
      case 1 : this.setState({comp: 'Papel'}); break;
      case 2 : this.setState({comp: 'Tesoura'});  break;
    }
    if (b==0 && user == 'Pedra' || b == 1 && user == 'Papel' || b == 2 && user == 'Tesoura'){
     this.setState({resu: 'Empatou!'});
   } 
   else if (b == 1 && user == 'Pedra' || b == 0 && user == 'Tesoura' || b == 2 && user == 'Papel'){
      this.setState({resu: 'Computador Venceu!'});
   } 
   else if (b == 2 && user == 'Pedra' || b == 1 && user == 'Tesoura' || b == 0 && user == 'Papel'){
      this.setState({resu: 'Você ganhou!'});
   }
   
  }

  render(){
    return(
      <View>
        <Topo></Topo>

        <View style={estilos.principal}>

          <View style = {estilos.botao}> 
            <Button title='Pedra' onPress={() => {this.jokenpo('Pedra')}}/> 
            </View>

          <View style = {estilos.botao}> 
            <Button title='Papel' onPress={() => {this.jokenpo('Papel')}}/>
            </View>

          <View style = {estilos.botao}> 
            <Button title='Tesoura' onPress={() => {this.jokenpo('Tesoura')}}/>
            </View>          
          
        </View>
        
        <View style={estilos.texto}>
          <Text style={estilos.resultado}> {this.state.resu}</Text>
          <Icone escolha={this.state.comp} jogador='Computador'></Icone>
          <Icone escolha={this.state.user} jogador='Usuario'></Icone>

        </View>

      </View>
    );
  };
}





AppRegistry.registerComponent('ServosTeste', () => ServosTeste);
