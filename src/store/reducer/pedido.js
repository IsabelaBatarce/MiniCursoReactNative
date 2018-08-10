const INITIAL_STATE = {
    itens:{},
    total:0
}

// o parametro state do reducer já recebe o parametro incial do state,por isso não precisa de um prev 
export default pedido = (state = INITIAL_STATE, action) => {
    switch(action_type){
        case 'ADD_ITEM':
// gera um novo state         
// ..state monta todos os itens do state, para não apagar nenhum
// parseFloat transforma uma string em número;    
            return { ...state,total: action.total+ parseFLoat(action.payload.preco)}
       
           
        case 'REMOVE_ITEM':   
         return { ...state,total: action.total - parseFLoat(action.payload.preco)}
            default:
            return state;
    }
    
}