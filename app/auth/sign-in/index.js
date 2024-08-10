import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import {Colors} from '../../../constants/Colors'
import Logo from '../../../assets/images/logoipsum.png'

export default function SingIn() {
  const navigation = useNavigation();
  useEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },)

  return (
    <View style={{
      padding:25,
      backgroundColor:Colors.White,
      height:'100%'
    }}>

      <Image 
        source={require('../../../assets/images/logoipsum.png')}
        style={{
            width:'12%',
            height:24,
            marginTop:30
        }}
        ></Image>

      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30,
        marginTop:40
      }}>Welcome back</Text>
      <Text style={{
        fontFamily:'outfit',
        fontSize:16,
        marginTop:12,
        color:Colors.Gray
      }}>Login In and access to thousands of places around the world with the help of our AI.</Text>


      <View style={{
        marginTop:40
      }}>
        
        <View>
          <Text style={{
            fontFamily:'outfit-bold',
            marginBottom:4
          }}>Email</Text>
          <TextInput style={styles.input}  placeholder='Enter your email'></TextInput>
        </View>

        <View>
          <Text style={{
            fontFamily:'outfit-bold',
            marginBottom:4
          }}>Password</Text>
          <TextInput style={styles.input}  placeholder='Enter your email'></TextInput>
        </View>

      </View>

    </View>
  )
};

const styles = StyleSheet.create({
  input:{
    padding:14,
    borderWidth:1,
    borderRadius:8,
    borderColor:Colors.LightBorder
  }
})