import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { UserContext } from "../../../ContextApi/UserProvider";


const OrderConfirmation = ({ navigation, route }) => {
  const {
    name, Price, Quantity, setQuantity, Area,MobileNo,Street, SubArea
  } = useContext(UserContext);
  const product = route.params;
  let itemprice = Price

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Text style={styles.User}> User: {name} </Text>
        <View style={styles.cont}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: product.src,
            }}
          />
          <Text style={{ fontSize: 25 }}> {product.name} </Text>
        </View>
        <View style={styles.pricelable}>
          <Text style={styles.lable}>Price {itemprice}  </Text>
          <TouchableOpacity style={{ backgroundColor: 'grey', marginLeft: 70, width: 30 }} onPress={() => setQuantity(Math.max(1, Quantity - 1))}>
            <Text style={{ fontSize: 32, color: 'white' }}> - </Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 23, marginLeft: 25, marginTop: 8 }}> {Quantity} </Text>
          <TouchableOpacity style={{ backgroundColor: 'grey', marginLeft: 29, width: 30 }} onPress={() => setQuantity(Quantity + 1)}>
            <Text style={{ fontSize: 25, color: 'white' }}> + </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.lableDetail}>Order Details </Text>
        <View style={styles.Details}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.OrderContent}>Items: </Text>
          <Text style={styles.UserContent}> {Quantity} </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
          <Text style={styles.OrderContent}>Name: </Text>
          <Text style={styles.UserContent}> {name} </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
          <Text style={styles.OrderContent}>Mobile No: </Text>
          <Text style={styles.UserContent}> {MobileNo} </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
          <Text style={styles.OrderContent}>Address:</Text>
          <Text style={styles.UserContent}>Street No {Street}, {SubArea}, {Area}  </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.OrderContent, {fontSize: 22}]}>Total Bill: </Text>
            <Text style={[styles.UserContent, {fontSize: 22}]}> {itemprice * Quantity} </Text>
          </View>
          <TouchableOpacity style={{
            backgroundColor: '#f4c64a',
            height: 35,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5
          }} onPress={() =>{ navigation.navigate("ThankyouPage")}} >
            <Text style={{
              fontSize: 23,
              color: 'red',
              fontWeight: 'bold'
            }}> Order Now </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  cont: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  User: {
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'sans-serif-thin'
  },
  tinyLogo: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    width: '70%',
  },
  lable: {
    fontSize: 30,
    color: 'blue'
  },
  pricelable: {
    flexDirection: 'row',
    marginTop: 10,
    borderRadius: 4,
  },
  lableDetail: {
    fontSize: 30,
    color: 'blue',
    marginTop: 40
  },
  Details: {
    borderWidth: 1,
    height: 190,
    marginLeft: 2,
    width: '99%'
  }, 
  OrderContent: {
    fontSize: 17, 
    fontWeight: 'bold',
    marginTop: 5
  },
  UserContent: {
    fontSize: 17, 
    marginLeft: 10,
    marginTop: 5
  }
})

export default OrderConfirmation;