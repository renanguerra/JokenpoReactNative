import React, { Component } from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';


const estilos = StyleSheet.create({
    texto: {
        alignSelf: 'center',
        marginBottom: 30,
    }

})

class Topo extends Component{
    render(){
      return(
        <View>
            <Image  source={require('../../img/jokenpo.png')}/>
          </View>
      );
    };
  }
  export default Topo;