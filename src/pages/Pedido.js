import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    StatusBar,
 } from 'react-native'
import {connect} from 'react-redux';
import Header from '../components/Header';
import Menu from '../components/Menu';
import {Actions} from 'react-native-router-flux'
import { colors, metrics } from '../styles';

const Pedido = props => (
    <View style={styles.container}>
        <StatusBar
            backgroundColor={colors.darkPrimary}
            barStyle="light-content"
        />
        <View style={styles.header}>
            <Header />
        </View>
        <View style={styles.menu}>
            <Menu />
        </View>
        <View style={styles.total}>
            {/* como não estamos usando uma classe, e sim uma função, não é necessário utilizar o this */}
            {/* to fixed tranforma em decimal */}
            <Text style={styles.valueTotal}>{props.total.toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress = {() => Actions.}>
            <Text style={styles.textButton}>Confirmar Pedido</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        flex: 1,
        backgroundColor: colors.primary,
        padding: metrics.basePadding,
        paddingBottom: metrics.basePadding/2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menu:{
        flex: 8,
        margin: metrics.baseMargin,
    },
    total:{
        height: 40,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: metrics.basePadding,
    },
    button:{
        flex: 1,
        backgroundColor: colors.success,
        margin: metrics.baseMargin,
        borderRadius: metrics.baseRadius,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton:{
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.darkTransparent
    },
    valueTotal:{
        fontSize: 25
    }


})

const mapStateToProps = state => ({
    // entra no state pedido e pega o total apena 
    total: state.pedido.total
})

export default connect (mapStateToProps)(Pedido);