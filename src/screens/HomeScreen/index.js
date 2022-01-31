import React, { useState, useEffect } from "react";
import { View, Text, Dimensions, Pressable } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from './styles.js'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import NewOrderPopup from '../../components/NewOrderPopup';
import { set } from "react-hook-form";


const origin = { latitude: -5.0688893, longitude: -42.7969829 };
const destination = { latitude: -5.0754132, longitude: -42.7969764 };
const GOOGLE_MAPS_APIKEY = 'AIzaSyCC9Cfo07Rk3guw9lsYR3W_wwWWn5u5ZYU';

const HomeScreen = () => {
   const [car, setCar] = useState(null);
   const [myPosition, setMyPosition] = useState(null);
   const [order, setOrder] = useState(null)
   const [newOrders, setNewOrders] = useState([{
      id: '1',
      type: 'MobbiX',

      originLatitude: -5.0688893,
      originLongitude: -42.7969829,

      destinationLatitude: -5.0754132,
      destinationLongitude: -42.7969764,

      user: {
         rating: 4.87,
         name: 'José',
      }
   },
   {
      id: '2',
      type: 'MobbiX Black',

      originLatitude: -5.0688893,
      originLongitude: -42.7969829,

      destinationLatitude: -5.0754132,
      destinationLongitude: -42.7969764,

      user: {
         rating: 3.87,
         name: 'Pedro',
      }
   },]);

   const fetchCar = async () => {
      try {
         // Puxar os dados do motorista do Hook de autenticação 1:19:40

         // const userData = await
         // console.log(userData)
         setCar(carData);
      } catch (e) {
         console.error(e);
      }
   }

   const fetchOrders = async () => {
      try {
         //1:44:43
         //const ordersData = await API.

      } catch (e) {

      }
   }

   /*  useEffect( ()=> {
       fetchCar();
       fetchOrders();
    }, [])
  */
   const onDecline = () => {
      //1:37:40
      setNewOrders(newOrders.slice(1));
   }

   const onAccept = (newOrder) => {
      setOrder(newOrder);
      setNewOrders(newOrders.slice(1));
   }

   const onGoPress = async () => {
      // 1:24:11
      // Update the car and set it to active
      try {
         // const userData = await Auth.
         // const input = {
         //   id: userData.
         //   isActive: !car.isActive,
         // }

         // const updatedCarData = await API.

         console.log(updatedCarData)
         //setCar(updatedCarData)
      } catch (e) {
         cosole.error(e);
      }
   }

   const onUserLocationChange = () => {
      setMyPosition(event.nativeEvent.coordinate);
   }

   const onDirectionFound = (event) => {
      if (order) {
         setOrder({
            ...order,
            distance: event.distance,
            duration: event.duration,
            pickedUp: order.pickedUp || event.distance < 0.2,
            isFinished: order.pickedUp && event.distance < 0.2,
         })
      }
   }

   const getDestination = () => {
      if (order && order.pickedUp) {
         return {
            latitude: order.destinationLatitude,
            longitude: order.destinationLongitude,
         }
      }
      return {
         latitude: order.originLatitude,
         longitude: order.originLongitude,
      }
   }



   const renderBottomTitle = () => {

      if (order && order.isFinished) {
         return (
            <View style={{ alignItems: 'center' }}>
               <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#cb1a1a', width: 200, padding: 10, }}>
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>Finalizar {order.type}</Text>
               </View>
               <Text style={styles.bottomText}>{order.user.username}</Text>
            </View>
         )
      }


      if (order && order.pickedUp) {
         return (
            <View style={{ alignItems: 'center', marginTop: 5 }}>
               <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text>{order.duration ? order.duration.toFixed(1) : '?'} min</Text>
                  <View style={{ backgroundColor: '#d41212', marginHorizontal: 10, width: 30, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                     <FontAwesome name={"user"} color={"white"} size={20} />
                  </View>
                  <Text>{order.distance ? order.distance.toFixed(1) : '?'} km</Text>
               </View>
               <Text style={[styles.bottomText, { marginTop: 5 }]}>Indo deixar {order.user.name}</Text>
            </View>
         )
      }


      if (order) {
         return (
            <View style={{ alignItems: 'center', marginTop: 5 }}>
               <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text>{order.duration ? order.duration.toFixed(1) : '5'} min</Text>
                  <View style={{ backgroundColor: '#1e9203', marginHorizontal: 10, width: 30, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                     <FontAwesome name={"user"} color={"white"} size={20} />
                  </View>
                  <Text>{order.distance ? order.distance.toFixed(1) : '2'} km</Text>
               </View>
               <Text style={[styles.bottomText, { marginTop: 5 }]}>Indo buscar {order.user.name}</Text>
            </View>
         )
      }
      if (car?.isActive) {
         return (
            <Text style={styles.bottomText}>Ativado</Text>
         )
      }
      return (<Text style={styles.bottomText}>Desativado</Text>)
   }

   return (
      <View>
         <MapView
            style={{ width: '100%', height: Dimensions.get('window').height - 150 }}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            onUserLocationChange={onUserLocationChange}
            initialRegion={{
               latitude: -5.0698793,
               longitude: -42.7965058,
               latitudeDelta: 0.0222,
               longitudeDelta: 0.0121,
            }}
         >
            {order && (
               <MapViewDirections
                  origin={myPosition}
                  onRedy={onDirectionFound}
                  destination={getDestination()}
                  apikey={GOOGLE_MAPS_APIKEY}
                  strokeWidth={4}
                  strokeColor="black"
               />
            )}


         </MapView>

         <Pressable
            onPress={() => console.warn('Balance')}
            style={styles.balanceButton}>
            <Text style={styles.balanceText}>
               <Text style={{ color: 'green' }}>R$</Text>
               {' '}
               0.00
            </Text>
         </Pressable>

         <Pressable
            onPress={() => console.warn('Hey')}
            style={[styles.roundButton, { top: 10, left: 10 }]}>
            <Entypo name={"menu"} size={24} color="#4a4a4a" />
         </Pressable>

         <Pressable
            onPress={() => console.warn('Hey')}
            style={[styles.roundButton, { top: 10, right: 10 }]}>
            <Entypo name={"menu"} size={24} color="#4a4a4a" />
         </Pressable>

         {/* <Pressable
        onPress={() => console.warn('Hey')}
        style={[styles.roundButton, {bottom: 110, left: 10}]}>
        <Entypo name={"menu"} size={24} color="#4a4a4a"/>
      </Pressable>

      <Pressable
        onPress={() => console.warn('Hey')}
        style={[styles.roundButton, {bottom: 110, right: 10}]}>
        <Entypo name={"menu"} size={24} color="#4a4a4a"/>
      </Pressable> */}

         <Pressable
            onPress={onGoPress}
            style={styles.goButton}>
            {
               (car?.isActive)
                  ? <Text style={[styles.goText, { color: 'red' }]}>Parar</Text>
                  : <Text style={[styles.goText, { color: 'green' }]}>Iniciar</Text>
            }

         </Pressable>

         <View style={styles.bottomContainer}>
            <Ionicons name={"options"} size={30} color="#4a4a4a" />
            {renderBottomTitle()}
            <Entypo name={"menu"} size={30} color="#4a4a4a" />
         </View>

         {newOrders.length > 0 && !order && <NewOrderPopup
            newOrder={newOrders[0]}
            duration={2}
            distance={0.5}
            onDecline={onDecline}
            onAccept={() => onAccept(newOrders[0])}
         />}

      </View>
   );
};

export default HomeScreen;
