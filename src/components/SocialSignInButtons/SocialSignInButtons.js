import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../CustomButton';

const SocialSignInButtons = () => {
   const onSignInFacebook = () => {
      console.warn('onSignInFacebook')
   };

   const onSignInGoogle = () => {
      console.warn('onSignInGoogle')
   };

   const onSignInApple = () => {
      console.warn('onSignInApple')
   };
   return (
      <>
          <CustomButton
               text="Entrar com Facebook"
               onPress={onSignInFacebook}
               bgColor="#E7EAF4"
               fgColor="#4765A9"
            />
            <CustomButton
               text="Entrar com Google"
               onPress={onSignInGoogle}
               bgColor="#FAE9EA"
               fgColor="#DD4D44"
            />
            <CustomButton
               text="Entrar com Apple ID"
               onPress={onSignInApple}
               bgColor="#e3e3e3"
               fgColor="#363636"
            />
      </>
   )
}

export default SocialSignInButtons
