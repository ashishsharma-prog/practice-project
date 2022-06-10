import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from "../screens/ProductScreen"
import CartScreen from '../screens/CartScreen';
import EditScreen from '../screens/EditScreen';
import OrderScreen from '../screens/OrderScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
      <Stack.Screen name="Product" component={ProductScreen}/>
      <Stack.Screen name="Cart" component={CartScreen}/>
      <Stack.Screen name="Order" component={OrderScreen}/>
      <Stack.Screen name="DetailScreen" component={ProductDetailScreen}/>
      <Stack.Screen name="Edit" component={EditScreen}/>

      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator

const styles = StyleSheet.create({})