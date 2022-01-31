import React, { useState } from 'react'
import { View, Text, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';


const NewPasswordScreen = () => {
   const [code, setCode] = useState('');
   const [newPassword, setNewPassword] = useState('');
   const navigation = useNavigation();


   const onSubmitPressed = () => {
      navigation.navigate('Home');
   }

   const onSignInPress = () => {
      navigation.navigate('SignIn');
   }

   return (
      <ScrollView showsVerticalScrollIndicator={false}>
         <View style={styles.root}>
            <Text style={styles.title}>Alterar Senha</Text>

            <CustomInput
               placeholder="Codigo"
               value={code}
               setValue={setCode}
            />

            <CustomInput
               placeholder="Digite a nova senha"
               value={newPassword}
               setValue={setNewPassword}
            />


            <CustomButton
               text="Enviar"
               onPress={onSubmitPressed}
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
export default NewPasswordScreen;
