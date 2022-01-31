import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {

   const [code, setCode] = useState('');
   const navigation = useNavigation();

   const onConfirmPressed = () => {
      navigation.navigate('Home');

   }

   const onSignInPress = () => {
      navigation.navigate('SignIn');

   }
   const onResendPress = () => {
      console.warn('onResendPress')
   }

   return (
      <ScrollView showsVerticalScrollIndicator={false}>
         <View style={styles.root}>
            <Text style={styles.title}>Confirme seu Email</Text>

            <CustomInput
               placeholder="Digite o codigo de confirmação"
               value={code}
               setValue={setCode}
            />


            <CustomButton
               text="Confirmar"
               onPress={onConfirmPressed}
            />

            <CustomButton
               text="Reenviar Codigo"
               onPress={onResendPress}
               type="SECONDARY"
            />


            <CustomButton
               text="Voltar para login"
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
export default ConfirmEmailScreen;
