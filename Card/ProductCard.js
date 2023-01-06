import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  
} from "react-native";


function ProductCard({ product}) {
   const { imageUrl,desc } = product;
  return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={imageUrl} style={styles.productImage}/>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{desc}</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 320,
    paddingHorizontal:5,
    marginBottom:-100,
    backgroundColor:"white",
  },
  imageContainer: {
    width: "100%",
    height: "55%",
    overflow: "hidden",
    backgroundColor:"white",
    marginBottom:10,
  },
  productImage: {
    width: 150,
    height:200,
    resizeMode:'contain',
  },
  titleContainer: {
    width: "100%",
    height: "10%",
    justifyContent: "flex-end",
  },
  titleText: {
    color: 'black',
    fontSize: 13,
    fontWeight: "bold",
  },
});

export default ProductCard;