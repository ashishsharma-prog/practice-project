import { StyleSheet, Text, View ,Image,Button} from 'react-native'
import React, { useLayoutEffect, useEffect, useState } from "react";
import { TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import * as CartActions from '../store/actions/CartAction'
import { Feather } from '@expo/vector-icons'; 
import IconBadge from 'react-native-icon-badge';
const ProductItem = (props) => {
  const dispatch=useDispatch();
  const Quantity=useSelector(state=>state.cartreducer.totalquantity)
  useLayoutEffect(()=>{
    props.navigation.setOptions({
      title: "Chats",
     
      headerRight: () => (
       <TouchableOpacity onPress={()=>{
        props.navigation.navigate("Cart")
       }}>
     {/* <Feather name="shopping-cart" size={24} color="black" /> */}
     <IconBadge
            MainElement={
                 <Feather
                 name="shopping-cart"
                    size={40}
                    style={{ marginBottom: -3 }}
                    color="black"
                   />
            }
            BadgeElement={
              <Text style={{color:'black'}}>{Quantity}</Text>
            }
            IconBadgeStyle={
              {width:20,
              height:20,
              backgroundColor: "#F0851B"}
            }
            Hidden={Quantity==0}
        />
       </TouchableOpacity>
      ),
    });
  },[props.navigation,Quantity])
  return (
    <View>
      <TouchableOpacity
       style={styles.card}
       onPress={() => {
        props.navigation.navigate("DetailScreen", {
          id: props.id,
          title: props.title,
        });
      }}
      >
        <Image style={styles.img} source={{ uri:props.image}}/>
        <View style={{marginLeft:30}}>
        <Text>{props.title}</Text>
        <Text numberOfLines={1}>{props.description}</Text>
        <Text>${props.price.toFixed(2)}</Text>
        </View>
      
        
        <View style={styles.btnContainer}>
          <View style={{marginRight:20}}>
          <Button color="#F0851B"
              title="View Details"
              onPress={() => {
                props.navigation.navigate("Order", {
                  id: props.id,
                  title: props.title,
                });
              }}
              />
          </View>
       <View style={{marginLeft:80}}>
       <Button color="#F0851B"
              title="Add to cart"
              onPress={() => {
                dispatch(CartActions.addToCart(props.itemData));
              }}
              />
             
       </View>
              

        </View>
        
      </TouchableOpacity>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    img:{
        height: 300,
        width:300,
        margin: 30
    },
    card: {
      backgroundColor: "#fef4f4",
      borderRadius: 20,
      elevation: 5,
      marginVertical: 18,
    },
    btnContainer:{
flexDirection:'row',
margin: 20
    }
})