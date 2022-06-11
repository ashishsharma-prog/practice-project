import { StyleSheet, Text, View ,Image,Button} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
const ProductItem = (props) => {
  
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
                props.navigation.navigate("DetailScreen", {
                  id: props.id,
                  title: props.title,
                });
              }}
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