import React, {useEffect}  from "react";
import { StyleSheet, View, Image, useWindowDimensions } from "react-native";
import { useNavigation, CommonActions } from "@react-navigation/native";
import logo from "../../assets/images/mobbiDriver.png";



const SplashScreen = () => {

  const navigation = useNavigation();
  const { height } = useWindowDimensions();

  useEffect(() => {
    setTimeout(() =>{
      navigation.dispatch(CommonActions.reset({
        index: 0,
        routes: [{name: 'SignIn'}]
      }))
    }, 3000);
  }, [])

  
  return (
    <View style={styles.container}>
      <Image
        source={logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SplashScreen;
