import React, { useState, useContext, useEffect } from 'react';
import { FlatList,TouchableOpacity, View,Text,StyleSheet, ActivityIndicator } from 'react-native';
import RenderBurger from '../ProductRender/RenderBurger';
import { UserContext } from '../../../../ContextApi/UserProvider';


export default function Pizza({navigation}) {
  const {
    name, IP
  } = useContext(UserContext)
  // let a; 
  const [images, setimages] = useState([])
  useEffect(async() => {
    const response = await fetch(`http://${IP}:1337/api/Pizzas`);
    if(response.ok){
      const result = await response.json()
      setimages(result.data);
    }else{
      console.log('No response is there.');
    }
  },[])

  if(!images.length)
  <ActivityIndicator />


  return(
    <View style={{flex: 1}}>
    <Text style={styles.User}> User: {name} </Text>
      <Text style={styles.Title}> Pizza </Text>
    <FlatList
  data={images}
  renderItem={ ({item}) => (
      <TouchableOpacity style={{justifyContent: 'center',flexDirection: 'row'}} onPress={() => navigation.navigate("OrderPage", item.attributes)}>
    <RenderBurger itm={item.attributes} />
    </TouchableOpacity>
  )
  }
/>
</View>
  )
}

const styles = StyleSheet.create({
  Title: {
    textAlign: 'center',
    marginBottom: 5,
    fontSize:80,
    color:'#efe14c',
    textShadowColor:'#151617',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:10,
  },
  User: {
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'sans-serif-thin'
  }
})



