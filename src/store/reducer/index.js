// junção dos dois reducers
import {combineReducers} from 'redux';
import listaPedidos from './listaPedidos';
import pedido from './pedido';

export default combineReducers({
// passando um objeto 'pedido': pedido 
    listaProdutos,
    pedido
})