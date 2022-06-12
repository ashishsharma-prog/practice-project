import { ADD_TO_CART } from "../actions/CartAction"
import CartItem from "../../models/CartModel"

const initialState={
    item:{},
    totalamount:0
}

export default(state=initialState,action)=>{
switch(action.type){
    case ADD_TO_CART:
    const addedProduct = action.product;
           const prodPrice = addedProduct.price;
           const prodTitle = addedProduct.title;
           const prodImage = addedProduct.imageUrl

           let updatedOrNewprod;
           //agar vo item pehle se present hai tou image vhi rhne denge
           //quantity ma uski id se use kjarke uski quantity badha denge
           //title same rhega
           //prices same rhega
           //total vo uska price add hoga
           //else agar vo naya product hai tou hum 
           //sab chij new add karenge
        if(state.item[addedProduct.id]){
            updatedOrNewprod=new CartItem(
                prodImage,
                   state.item[addedProduct.id].quantity + 1,
                   prodTitle,
                   prodPrice,
                   state.item[addedProduct.id].total + prodPrice
            )
        }
        else{
            updatedOrNewprod=new CartItem(
                prodImage,
                    1,
                   prodTitle,
                   prodPrice,
                   prodPrice
            )
        }
        return {
            ...state,//purani state
            item:{...state.item,[addedProduct.id]:updatedOrNewprod},
            totalamount:state.totalamount+prodPrice
        }
}
return state;
}