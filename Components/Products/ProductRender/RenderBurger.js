import React from 'react'
import {View,Text,Image,StyleSheet } from 'react-native'

export default function RenderBurger(props){
  return (
    <View style={styles.conatin}>
    <Image 
    source={{
          uri: props.itm.src,
        }}
    style={styles.pics}
    />
    <View>
      <Text style={styles.name}> {props.itm.name} </Text>
    <Text style={styles.key}> From {props.itm.Small} </Text>
    </View>
    <Text style={{fontSize: 20,marginLeft: 30}}> {">"} </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  pics:{
    width:110,
      height:160,
      margin:8,
      resizeMode: 'contain',
  },
  conatin: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 120,
    borderWidth: 1,
    height: 95,
    width: "99%",
    margin: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  key: {
    textAlign: 'center'
  },
  name: {
    fontSize: 20,
    marginLeft: 15,
    width: 150
  },
  key: {
    fontSize: 20,
    marginLeft: 15
  }
})