import React, {Component} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import {addItemPedido, removeItemPedido} from '../store/actions/pedidoActions';
import { colors, metrics } from '../styles';
import Pedido from '../pages/Pedido';

class Produto extends Component {

    state ={
        amount: 0,
    }

    constructor(props){
        super(props)
    }

    _increment = () => {
        // pega esse nome e preço lá do flatList
        let {nome, preco} = this.props;
        this.props.addItemPedido({nome,preco})
        this.setState( prev =>({
            amount: ++prev.amount
        }))
    }

    _decrement = () => {
        
        let {nome,preco} = this.props;
        this.props.removeItemPedido({nome,preco})
        if ( this.state.amount === 0 ) return null;
        this.setState( prev =>({
            amount: --prev.amount
        }))
    }


    render(){
        return (
            <View style={styles.box}>
                <View style={styles.info}>
                    <Text style={styles.name}>{ this.props.nome }</Text>
                    <Text style={styles.price}>R$ { this.props.preco }</Text>
                </View>
                <View style={styles.quantity}>
                    <Text style={styles.quantityValue}>{this.state.amount}</Text>
                    <View>
                        <TouchableOpacity style={styles.button} onPress={ () => this._increment() }>
                            <Text style={styles.textButton}>+</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={ () => this._decrement() }>
                            <Text style={styles.textButton}>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: metrics.baseMargin/2,
        paddingLeft: metrics.basePadding,
        backgroundColor: colors.white,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: metrics.baseRadius,
        shadowOpacity: 0.2,
        elevation: 4,
        borderRadius: metrics.baseRadius,
    },
    info:{
        justifyContent: 'space-between'

    },
    name:{
        fontSize: 25,
        fontWeight: 'bold',
    },
    price:{
        fontSize: 15,
        marginTop: metrics.baseMargin
    },
    quantity:{
        flexDirection: 'row',
    },
    button:{
        paddingVertical: metrics.basePadding/2,
        paddingHorizontal: metrics.basePadding,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton:{
        fontSize: 25,
        color: colors.darkTransparent,
        fontWeight: 'bold',
    },
    quantityValue:{
        fontSize: 40,
        alignSelf: 'center',
        marginHorizontal: metrics.baseMargin
    }
})

// as actions são chamadas via props
export default connect (null,{addItemPedido, removeItemPedido})(Produto)