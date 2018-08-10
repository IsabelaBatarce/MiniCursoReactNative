import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Pedido from './pages/Pedido';
import DadosEntrega from './pages/DadosEntrega';

export default (props) => (
    <Router>
        <Scene key='root'>
            <Scene key = 'pedido' component={Pedido}>
            <Scene key = 'dadosentrefa' component={DadosEntrega}>
        </Scene>    
    </Router>
)