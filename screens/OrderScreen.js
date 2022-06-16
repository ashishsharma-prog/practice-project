import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
const OrderScreen = () => {
 const orderProduct=useSelector( state=>state.orderreducer.orders)
 
 console.log(orderProduct.OrderItem)
 
  return (
    <FlatList
    data={orderProduct}
    keyExtractor={item=>item.id}
    renderItem={itemData=>
    <Text>{itemData.item.totalAmount}</Text>
    }  
    />
  )
}

export default OrderScreen

const styles = StyleSheet.create({})