import { ADD_TO_CART,REMOVE_FROM_CART } from "../actions/CartAction"
import CartItem from "../../models/CartModel"

const initialState={
    item:{},
    totalamount:0,
    totalquantity:0
}

export default(state=initialState,action)=>{
switch(action.type){
    case ADD_TO_CART:
    const addedProduct = action.product;
           const prodPrice = addedProduct.price;
           const prodTitle = addedProduct.title;
           const prodImage = addedProduct.imageUrl;
          
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
            totalamount:state.totalamount+prodPrice,
            totalquantity:state.totalquantity+1

        }
        case REMOVE_FROM_CART:
            const selectedItem=state.item[action.pid]//id se vo item nikal liya items se
            const currentQty=selectedItem.quantity;//quantity nikal li uss item ki
            let updatedCartItems;
            //agar quantity 1 se badi hai tou hum bas decrease karenge quantity ma or price ma
            if(currentQty>1){
                const  updatedNewCartItems = new  CartItem(
                selectedItem.imageUrl,
                selectedItem.quantity-1,
                selectedItem.productTitle,
                selectedItem.productPrice,
                selectedItem.total - selectedItem.productPrice
                )
                updatedCartItems={...state.item,[action.pid]:updatedNewCartItems}//uss id par vapas change product rkhdo
            }
            //else hum sidha use delete karenge
            else{
                updatedCartItems={...state.item}
                delete updatedCartItems[action.pid]
            }
            return{
                ...state,
                item:updatedCartItems,//item ma agya updated
                totalamount:state.totalamount-selectedItem.productPrice,//price update kardiya
                totalquantity:state.totalquantity-1
            }
}
return state;
}