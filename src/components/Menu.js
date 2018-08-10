import React, {Component} from 'react';
import { View, Text, FlatList } from 'react-native'
import { connect} from 'react-redux';

import Produto from './Produto';



class Menu extends Component {

    state = {
        lista_produtos: [
            
        ]
    }

    render(){
        return (
            <FlatList
                data ={this.props.lista_produtos}
                renderItem={ ({item}) => <Produto nome={item.nome} preco={item.preco} />}
                keyExtractor={ (item) => item.id }
            />
        )
    }
} 

// recebe no parametro lista_produtos o estado listaPedidos
const mapStateProps = state =>({
    lista_produtos: state.listaPedidos
})

// height order functions, uma função chamando outra função
// a função esta pegando todos estes estados e colocando no menu como props
// obrigatório exportar o connect, e não a classe Menu, pois ela ainda não tem o mapeamento e quem faz isso é o connect
export default connect(mapStateProps)(Menu)