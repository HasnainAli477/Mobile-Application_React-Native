import * as React from "react";
import { View, FlatList, StyleSheet, Text ,Image,Pressable, TouchableOpacity, ScrollView} from "react-native";
import ProductCard from "../components/ProductCard";

const product= [
    {
      id: 1,
      imageUrl: require("../../assets/mc1.jpg"),
      desc: "Win Free Movie Tickets",
    },
  
    {
      id: 2,
      imageUrl: require("../../assets/mc2.jpg"),
      desc: "Win Free Movie Tickets",
    },
  
    {
      id: 3,
      imageUrl: require("../../assets/mc1.jpg"),
      desc: "Win Free Movie Tickets",
    },
  
    {
      id: 4,
      desc: "Win Free Movie Tickets",
      imageUrl: require("../../assets/mc2.jpg"),
    },
  
    {
      id: 5,
       desc: "Win Free Movie Tickets",
      imageUrl: require("../../assets/mc1.jpg"),
    },
    {
      id: 6,
       desc: "Win Free Movie Tickets",
      imageUrl: require("../../assets/mc2.jpg"),
    },
    {
      id: 7,
       desc: "Win Free Movie Tickets",
      imageUrl: require("../../assets/mc1.jpg"),
    },
    {
      id: 8,
       desc: "Win Free Movie Tickets",
      imageUrl: require("../../assets/mc2.jpg"),
    },
    {
      id: 9,
       desc: "Win Free Movie Tickets",
      imageUrl: require("../../assets/mc1.jpg"),
    },
    {
      id: 10,
       desc: "Win Free Movie Tickets",
      imageUrl: require("../../assets/mc2.jpg"),
    },{
      id: 11,
       desc: "Win Free Movie Tickets",
      imageUrl: require("../../assets/mc1.jpg"),
    },
    {
      id: 12,
       desc: "Win Free Movie Tickets",
      imageUrl: require("../../assets/mc2.jpg"),
    },{
      id: 13,
       desc: "Win Free Movie Tickets",
      imageUrl: require("../../assets/mc1.jpg"),
    },
    {
      id: 14,
       desc: "Win Free Movie Tickets",
      imageUrl: require("../../assets/mc2.jpg"),
    },{
      id: 15,
       desc: "Win Free Movie Tickets",
      imageUrl: require("../../assets/mc1.jpg"),
    },
    {
      id: 16,
       desc: "Win Free Movie Tickets",
      imageUrl: require("../../assets/mc2.jpg"),
    },{
      id: 17,
       desc: "Win Free Movie Tickets.",
      imageUrl: require("../../assets/mc1.jpg"),
    },
    {
      id: 18,
       desc: "Win Free Movie Tickets",
      imageUrl: require("../../assets/mc2.jpg"),
    },{
      id: 19,
       desc: "Win Free Movie Tickets",
      imageUrl: require("../../assets/mc1.jpg"),
    },
    {
      id: 20,
       desc: "Win Free Movie Tickets",
      imageUrl: require("../../assets/mc2.jpg"),
    }
]

function FirstScreen({ navigation, route,props }) {
   
  return (
    <View style={styles.container}>
   
    <View>
    <Image style ={{resizeMode:'contain',height:173,width:"100%"}}source={require("../../assets/mcburger.jpg")}/>
      <View style={styles.button}>
      <Text style={[styles.Scannow]}>ScanNow</Text>
    </View>
    </View>    

   <View>   
     <Text style={{fontSize:30,marginLeft:10,fontWeight:'bold',marginTop:10,fontFamily:'serif'}}>Earn FREE 100 </Text>
      <Text style={{fontSize:27,marginLeft:10,fontWeight:'bold',fontFamily:'serif'}}>bonus points on </Text>
      <Text style={{fontSize:25,marginLeft:10,fontWeight:'bold',fontFamily:'serif'}}>your first scan </Text>
   </View> 
   
      <View>
      <ScrollView> 
      <FlatList
        data={product}
        numColumns={2}
        keyExtractor={product.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {
            navigation.navigate("LoginScreen");
    }}>
          <ProductCard product={item} />
          </TouchableOpacity>
        )}
        style={{
          padding: "1%",
        }}
      />  
      
    </ScrollView>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    flex: 1
  },
   button: {
    paddingVertical: 12,
    paddingHorizontal: 17,
    borderRadius: 15,
    backgroundColor: 'red',
    alignSelf:'center',
    height:3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Scannow:{
    color: 'white'
  }

});

export default FirstScreen;