import React, { useContext } from 'react';
import { View, Pressable,TextInput,Text,StyleSheet } from 'react-native';
import { UserContext } from '../../ContextApi/UserProvider';


export default function Guest({navigation, route}){
  let product = route.params;
  const {
    setName, setArea, setMobileNo, setStreet, setSubArea
  } = useContext(UserContext);
  return(
    <View style={styles.containor}>
    <Text style={styles.TextTop}> Delivery Address </Text>
    <View style={styles.form}>
    <Text style={styles.Text}>*Name </Text>
  <TextInput style={styles.TextInput} onChangeText={(text) => setName(text)}/> 
  <Text style={styles.Text}>*Mobile Number </Text>
  <TextInput style={styles.TextInput} onChangeText={(text) => setMobileNo(text)}/> 
  <Text style={styles.Text}>*Area </Text>
  <TextInput style={styles.TextInput} onChangeText={(text) => setArea(text)}/> 
  <Text style={styles.Text}>*Sub Area </Text>
  <TextInput style={styles.TextInput} onChangeText={(text) => setSubArea(text)}/> 
  <Text style={styles.Text}>*Street No </Text>
  <TextInput style={styles.TextInput} onChangeText={(text) => setStreet(text)}/> 
  <Pressable style={styles.btt} onPress={() => navigation.navigate("OrderConfirmation", product)}> 
  <Text style={{color: 'white',textAlign: 'center'}}> 
  Confirm Delivery Address
  </Text>
   </Pressable>
   </View>
  </View>
  )
}

const styles = StyleSheet.create({
  TextTop: {
    marginLeft: 20,
    fontSize: 30,
    textAlign: 'center',
    color: 'black'
      },
      form:{
        marginLeft: 10,
        backgroundColor: '#f9f3ec',
        borderRadius: 15,
        height: 400
      },
  containor:{
    marginTop: 22,
    alignItems: 'center'
  },
  TextInput:{
    borderWidth: 1,
  borderColor: 'black',
  width: 300,
  },
  btt: {
    borderWidth: 1,
    width: 200,
    backgroundColor: '#840000',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 50
  },
  Text: {
    fontSize: 20,
    marginTop: 15
  }
})