import { StyleSheet, Text, View ,Image,Button} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from "react-redux";
const ProductDetailScreen = ({navigation,route}) => {
 //view detail par jab hum jayenge tou uss selected product ki id params ma pass karenge fir yha useselector ki help se global state se vo same id vala product utaenge
  const productId=route.params.id;
  const selectedId=useSelector(state=>state.products. availableProducts.find(prod=>prod.id === productId))
  return (
    <View>
    <TouchableOpacity
     style={styles.card}
    
    >
      <Image style={styles.img} source={{ uri:selectedId.imageUrl}}/>
      <View style={{marginLeft:30}}>
      <Text>{selectedId.title}</Text>
      <Text >{selectedId.description}</Text>
      <Text>${selectedId.price.toFixed(2)}</Text>
      </View>
    
      
      <View style={styles.btnContainer}>
        <View style={{marginRight:20}}>
        <Button color="#F0851B"
            title="BuyNow"
            // onPress={() => {
            //   props.navigation.navigate("DetailScreen", {
            //     id: props.id,
            //     title: props.title,
            //   });
            // }}
            />
        </View>
     <View style={{marginLeft:80}}>
     <Button color="#F0851B"
            title="Add to cart"/>
     </View>
            

      </View>
      
    </TouchableOpacity>
  </View>
  )
}

export default ProductDetailScreen

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