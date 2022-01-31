import React, { useEffect } from "react";
import {
  Alert,
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Logo from "../../assets/images/mobbiDriver.png";
import CustomButton from "../../components/CustomButton";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const SignInScreen = () => {
  const { register, setValue, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const navigation = useNavigation();

  useEffect(() => {
    register("username");
    register("password");
  }, [register]);

  const { height } = useWindowDimensions();

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };

  const onSignUpPress = () => {
    navigation.navigate("SingUp");
  };

  const HomeScreenPress = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
          <Image
            source={Logo}
            style={[styles.logo, { height: height * 0.3 }]}
            resizeMode="contain"
          />

        <TextInput
          style={styles.input}
          label={"Username"}
          placeholder={"Digite seu Email"}
          onChangeText={(text) => setValue("username", text)}
        />

        <TextInput
          style={styles.input}
          secureTextEntry
          label={"Senha"}
          placeholder={"Digite sua Senha"}
          onChangeText={(text) => setValue("password", text)}
        />
        <CustomButton onPress={HomeScreenPress} text="Continuar" />

        <CustomButton
          text="Esqueceu a senha?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

       {/*  <SocialSignInButtons /> */}

        <CustomButton
          text="Não tem conta? Crie uma"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
    marginTop: 40,
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
    marginBottom: 30,
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    height: 40,
    margin: 1,
    padding: 1,
  },
});
export default SignInScreen;
