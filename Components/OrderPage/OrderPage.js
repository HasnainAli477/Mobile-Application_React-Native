  import React, {useContext} from 'react';
  import { View, Image, StyleSheet,Text,TouchableOpacity, ScrollView } from 'react-native';
  import { UserContext } from '../../../ContextApi/UserProvider';
  import Guest from '../Guest';

  const styles = StyleSheet.create({
    tinyLogo: {
      width: 200,
      height: 200,
      justifyContent: 'center',
      width: '70%',
    },
    category: {
      fontSize: 18,
      marginLeft: 10,      
      width: 240
    },
    cont: {
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: 356,
      marginLeft: 2
    },
    User: {
      fontSize: 18,
      textAlign: 'left',
      fontFamily: 'sans-serif-thin'
    },
    TouchOp: {
      paddingTop: 5,
      marginTop: 10,
      borderWidth: 1,
      height: 80,
      width: 355,
      marginLeft: 3,
      flexDirection: "row",
      alignItems: "center",
    },
    ttinyLogo: {
      width: 70,
      height: 70,
    },
    lable: {
      fontSize: 35,
      color: 'blue'
    },
    forward: {
      marginLeft: 10,
      fontSize: 20
    }
  });

  const OrderPage = ({navigation, route}) => {
    const {
      name, setPrice
    } = useContext(UserContext);
      const product = route.params;

    return (
      <View style={{flex: 1}}>
      <ScrollView>
      <Text style={styles.User}> User: {name} </Text>
      <View style={styles.cont}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: product.src,
          }}
        />
        <Text style={{fontSize: 25}}> {product.name} </Text>
        </View>
        <Text style={styles.lable}> Select Your Item </Text>
        <TouchableOpacity style={styles.TouchOp} onPress={() => {
        setPrice(product.Large)
        navigation.navigate("Guest",product)
        }}>
          <View style={styles.tinylogoView}>
            <Image
              style={styles.ttinyLogo}
              source={{
                uri: product.src,
              }}
            />
          </View>
          <Text style={styles.category}>{product.name} Large {product.Large} </Text>
          <Text style={styles.forward}> {">"} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchOp} onPress={() => {
        setPrice(product.Medium)
        navigation.navigate("Guest",product)
        }}>
        <View style={styles.tinylogoView}>
        <Image
          style={styles.ttinyLogo}
          source={{
            uri: product.src,
          }}
        />
        </View>
        <Text style={styles.category}>{product.name} Medium {product.Medium} </Text>
        <Text style={styles.forward}> {">"} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TouchOp} onPress={() => {
        setPrice(product.Small)
        navigation.navigate("Guest",product)
        }}>
        <View style={styles.tinylogoView}>
        <Image
          style={styles.ttinyLogo}
          source={{
            uri: product.src,
          }}
        />
        </View>
        <Text style={styles.category}>{product.name} Small {product.Small} </Text>
        <Text style={styles.forward}> {">"} </Text>
        </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }

  export default OrderPage;