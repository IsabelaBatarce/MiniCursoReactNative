export const addItemPedido = (item) =>({
    type:'ADD_ITEM',
    payload: item,
})

export const removeItemPedido = (item) =>({
    type:'REMOVE_ITEM',
    payload: item,
})