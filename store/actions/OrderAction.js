export const ADD_ORDER='ADD_ORDER';

export const add_order=(cartItem,totalamount,totalquantity)=>{
    return {type:ADD_ORDER,
        orderData:{
            items:cartItem,
            amount:totalamount,
            quantity:totalquantity
        }
        }
}