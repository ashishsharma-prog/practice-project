import { ADD_ORDER } from "../actions/OrderAction"
import OrderModel from "../../models/OrderModel";
const initialState={
    orders:[]
}


export default (state=initialState,action)=>{
switch(action.type){
    case ADD_ORDER:
        const orderItem=action.orderData.items;
        const Tamount=action.orderData.amount;
        const Tquantity=action.orderData.quantity;
        const newOrder=new OrderModel(
            new Date().toString(),
            orderItem,
            Tamount,
            Tquantity,
            new Date()
        )
        return {
            ...state,
            orders:state.orders.concat(newOrder)
        }
}
return state;
}