import { Button, StyleSheet, Text, View ,FlatList} from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import CartItem from '../ShopComponents/CartItem';
import * as CartActions from '../store/actions/CartAction'
import * as OrderActions from '../store/actions/OrderAction'
const CartScreen = (props) => {
  const amount=useSelector(state=>state.cartreducer.totalamount)
  const Quantity=useSelector(state=>state.cartreducer.totalquantity)
  const temp=useSelector(state=>state.cartreducer.item);
  console.log(temp)
  const cartItems=useSelector(state=>{
    const transformedProduct=[]
    for(const key in state.cartreducer.item){
      transformedProduct.push({
        productId:key,
        imageUrl:state.cartreducer.item[key].imageUrl,
        productTitle:state.cartreducer.item[key].productTitle,
        productPrice:state.cartreducer.item[key].productPrice,
        quantity:state.cartreducer.item[key].quantity,
        total:state.cartreducer.item[key].total
      })
    }
    return  transformedProduct.sort((a, b) =>
    a.productId > b.productId ? 1 : -1);
})
  console.log(cartItems.length)
 const dispatch=useDispatch()
  return (
    
    <View style={{flex:1}}>
    <View style={styles.summary}>
   <Text style={styles.priceText}>Total Amount :
       <Text  style={{color:'#ff7f50'}}> $ {Math.round(amount.toFixed(2) * 100) / 100}</Text>
   </Text>
   <Text style={styles.priceText}>Total Items :
   <Text>{Quantity}</Text>
   </Text>
     
    </View>
    <FlatList
    data={cartItems}
    keyExtractor={item=>item.productId}
    renderItem={itemData=>
    <CartItem
    imageUrl={itemData.item.imageUrl}
    quantity={itemData.item.quantity}
    title={itemData.item.productTitle}
    amount={itemData.item.productPrice}
    deletable
   onRemove={()=>{
    dispatch(CartActions.removeFromCart(itemData.item.productId))
   }}
   
    />
    
    }  
    />
   
     <View style={styles.btn}>
       
       <Button title="BUY NOW"
        color="#F0851B" 
        disabled={cartItems.length === 0 }
        onPress={()=>{
          dispatch(OrderActions.add_order(cartItems,amount,Quantity))
        }}
       />
   </View>
   

</View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  priceText:{
    fontSize:19,
    
},
btn:{
  marginVertical:20
}
})