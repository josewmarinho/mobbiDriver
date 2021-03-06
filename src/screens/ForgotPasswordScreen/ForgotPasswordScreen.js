import React, { useState } from 'react'
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';


const ForgotPasswordScreen = () => {

   const [username, setUsername] = useState('');
   const navigation = useNavigation();

   const onSendPress = () => {
      navigation.navigate('NewPassword');

   }

   const onSignInPress = () => {
      navigation.navigate('SignIn');

   }

   return (
      <ScrollView showsVerticalScrollIndicator={false}>
         <View style={styles.root}>
            <Text style={styles.title}>Resete sua senha</Text>

            <CustomInput
               placeholder="Digite seu Email"
               value={username}
               setValue={setUsername}
            />


            <CustomButton
               text="Enviar"
               onPress={onSendPress}
            />


            <CustomButton
               text="Voltar para Login"
               onPress={onSignInPress}
               type="TERTIARY"
            />

         </View>
      </ScrollView>
   );
};

const styles = StyleSheet.create({
   root: {
      alignItems: 'center',
      padding: 20,
   },
   title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#051C60',
      marginVertical: 10,
   },
   text: {
      color: 'gray',
      marginVertical: 10,
   },
   link: {
      color: '#FDB075',
   },
});
export default ForgotPasswordScreen;
