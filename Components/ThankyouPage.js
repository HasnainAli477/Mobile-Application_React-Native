// import React, {useContext } from "react";
// import LottieView from 'lottie-react-native'
// import {View, StyleSheet, Text} from 'react-native'
// import { UserContext } from "../../ContextApi/UserProvider";

// export default function ThankyouPage(navigation) {
//   const {name } = useContext(UserContext)
//     return(
//         <View style={styles.container}>
//          {/* <LottieView
//         autoPlay
//         style={{
//           width: 200,
//           height: 200,
//           backgroundColor: '#eee',
//         }}
//         // Find more Lottie files at https://lottiefiles.com/featured
//         source={require('./../..//assets/welcome.json')}
//       /> */}
//       <View style={{flex: 0.5, backgroundColor: '#fbf5e6',width: '99%', justifyContent: 'center', alignItems: 'center'}}>
//       <Text style={styles.thanks}> Order Confirmed </Text>
//       <Text style={styles.thanks}> Thanks for Choosing Us</Text>
//       <Text style={[styles.thanks,{fontSize: 23 }]}> {name}</Text>
//       <Text style={styles.thanks}> Your Order number is: {Math.floor((Math.random() * 500)+200)}</Text>
//       </View>
//       </View>
//     )
// }

// const styles = StyleSheet.create ({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fbeec7'
//   },
//   thanks : {
//     fontSize: 30,
//     fontFamily: 'Roboto',
//     color: 'black'
//   }
// })









import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default function App() {
  const animation = useRef(null);
  useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    // animation.current?.play();
  }, []);

  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#eee',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('./assets/gradientBall.json')}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Restart Animation"
          onPress={() => {
            animation.current?.reset();
            animation.current?.play();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
