import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class App extends Component<any, any> {
  frases: string[];

  constructor(props: any) {
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./assets/biscoito_fechado.jpg'),
    };

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
    this.reiniciar = this.reiniciar.bind(this);

    this.frases = [
      'A sorte acompanha os audazes.',
      'Grandes jornadas começam com um pequeno passo.',
      'O sucesso é a soma de pequenos esforços repetidos.',
      'Sua criatividade o levará a novos horizontes.',
      'Acredite em si mesmo e o resto virá naturalmente.',
      'A paciência é uma virtude que rende bons frutos.',
      'O melhor momento para plantar uma árvore foi há 20 anos.',
      'A vida trará coisas boas se tiveres paciência.'
    ];
  }

  quebrarBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: '"' + this.frases[numeroAleatorio] + '"',
      img: require('./assets/biscoito_aberto.jpg') 
    });
  }

  reiniciar() {
    this.setState({
      textoFrase: '',
      img: require('./assets/biscoito_fechado.jpg')
    });
  }

  render() {
    return (
      <View style={styles.container}>
        
        <Image
          source={this.state.img}
          style={styles.img}
        />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebrarBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.botao, { marginTop: 15, borderColor: '#121212' }]} 
          onPress={this.reiniciar}
        >
          <View style={styles.btnArea}>
            <Text style={[styles.btnTexto, { color: '#121212' }]}>Reiniciar</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
    minHeight: 60 
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});

export default App;