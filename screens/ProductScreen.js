import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FlatList } from "react-native";
import ProductItem from "../ShopComponents/ProductItem";
const ProductScreen = (props) => {
  //useselector ki help ki help se hum reducer ki state se data mangayenge
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <FlatList  data={products} renderItem={(itemData) =>
         <ProductItem 
         id={itemData.item.id}
         title={itemData.item.title}
         description={itemData.item.description}
         image={itemData.item.imageUrl}
         price={itemData.item.price}
         navigation={props.navigation}
         itemData={itemData.item}//pure item pass kardiya as aprop
         />
        }
         />
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
