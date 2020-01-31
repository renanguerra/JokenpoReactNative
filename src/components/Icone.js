import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';


const estilos = {
    textoNome: {
      alignSelf: 'center',
      marginBottom: 20,
      fontWeight: 'bold',
      marginTop: 10,
    }
  }

class Icone extends Component{
    render(){
      if (this.props.escolha == 'Pedra'){
        return(
          <View>
              <Text style={estilos.textoNome} >{this.props.jogador}</Text>
              <Image source={require('../../img/pedra.png')}/>
          </View>
        )
      }

       else if (this.props.escolha == 'Papel'){
         return(
           <View>
            <Text style={estilos.textoNome}>{this.props.jogador}</Text>
            <Image source={require('../../img/papel.png')}/>
           </View>
         )

      }
       else if (this.props.escolha == 'Tesoura'){
        return(
          <View>
            <Text style={estilos.textoNome}>{this.props.jogador}</Text>
            <Image source={require('../../img/tesoura.png')}/>
          </View>
        )
      }
      else {
        return false;
      }
    } 
}

export default Icone;