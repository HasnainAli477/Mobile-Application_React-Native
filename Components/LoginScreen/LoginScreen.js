import React, { useState,useContext } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { UserContext } from "../../../ContextApi/UserProvider";

function LoginScreen({navigation}) {
  const {
    setName, setPassword, name, Password
  } = useContext(UserContext)
  return (
    <View style={styles.container}>
    <View style={{flexDirection:'row',marginBottom:5}}>
    <Image style={{height:12,width:12,marginLeft:30,marginTop:5.5}}source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTUBlEh_jRaO6pZZw5cShUZqzXgle333w0Q&usqp=CAU"}}/>
    </View>
      <View style={styles.logoArea}>
        <View style={styles.logoContainer}>
          <Image
            source={{uri:("https://upload.wikimedia.org/wikinews/en/thumb/9/97/Mcdonalds-logo.JPG/603px-Mcdonalds-logo.JPG")}}
            style={styles.logoImage}
          />
        </View>
      </View>

      <View style={styles.loginArea}>
        <TextInput
          label="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          theme={{ colors: { placeholder: "black" } }}
          style={styles.textInput}
        />
        <TextInput
          label="Password"
          right={<TextInput.Icon style={{marginTop:20}} name="eye" />}
          secureTextEntry
          value={Password}
          onChangeText={(password) => setPassword(password)}
          theme={{ colors: { placeholder: "black" } }}
          style={styles.textInput}
        />
      <Text style={styles.linktxt}>Can't remember your password?</Text>
        <Button
          mode="contained"
          onPress={() => (navigation.navigate('ProductsNavigator'))}
          dark
          style={{
            backgroundColor: "#C0C0C0",
            width: "90%",
            alignSelf: "center",
            borderRadius: 0,
            marginVertical: "5%",
          }}
        >
          Sign in
        </Button>

        <Pressable onPress={() => {
        navigation.navigate("ProductsNavigator")
        setName('Guest')
        }
        }>
        <Text style={{ textAlign: "center" ,color:"blue",fontSize:20,textDecorationLine: "underline",  }}>
          LogIn As Guest
        </Text>
        </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  logoArea: {
    height: "38%",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    width: "80%",
    height: "80%",
    overflow: "hidden",
  },
  logoImage: {
    width: "100%",
    height: "100%",
    marginTop:5,
    resizeMode:"contain"
  },

  loginArea: {
    backgroundColor: "white",
    marginBottom: "5%",
  },
  textInput: {
    height: 50,
    marginBottom: 3,
    borderWidth: 2,
   },
  linktxt: {
    color: "red",
    textDecorationLine: "underline",
    alignSelf: "center",
    marginVertical: "3%"
  },
});

export default LoginScreen;