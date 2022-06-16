import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import OrderItem from '../ShopComponents/OrderItem';
const OrderScreen = () => {
 const orderProduct=useSelector( state=>state.orderreducer.orders)
 
 
 
  return (
    <FlatList
    data={orderProduct}
    keyExtractor={item=>item.id}
       renderItem={itemData=> <OrderItem
       id={itemData.item.id}
       items={itemData.item.items}
       amount={itemData.item.totalAmount}
       date={itemData.item.readableDate}
       
       
       />}
    />
  )
}

export default OrderScreen

const styles = StyleSheet.create({})