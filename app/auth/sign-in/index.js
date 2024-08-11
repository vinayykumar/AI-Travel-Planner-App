import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState} from 'react'
import { useNavigation, useRouter } from 'expo-router'
import {Colors} from '../../../constants/Colors'
import Logo from '../../../assets/images/logoipsum.png'
import Ionicons from '@expo/vector-icons/Ionicons';
import { auth } from "../../../configs/FirebaseConfig.js";
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'

export default function SingIn() {
  const navigation = useNavigation();
  const router = useRouter();

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  useEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },)

  const OnSignIn = ()=>{
    if(!email || !password){
      ToastAndroid.show('Invalid Details',ToastAndroid.BOTTOM);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error)
        if(errorCode=='auth/invalid-credential' || errorCode=='auth/invalid-email'){
          ToastAndroid.show("Please enter correct Email and Password", ToastAndroid.SHORT)
        }
      }); 
  }

  return (
    <View style={{
      padding:25,
      backgroundColor:Colors.White,
      height:'100%'
    }}>

    
        <TouchableOpacity onPress={()=>{
          router.back()
        }}>
            <Ionicons style={{marginTop:10}} name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

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
          <TextInput 
              onChangeText={(value)=>setEmail(value)}
              style={styles.input}  
              placeholder='Enter your email'></TextInput>
        </View>

        <View style={{
          marginTop:24
        }}>
          <Text style={{
            fontFamily:'outfit-bold',
            marginBottom:4
          }}>Password</Text>
          <TextInput 
              onChangeText={(value)=>setPassword(value)}
              style={styles.input} 
              secureTextEntry={true} 
              placeholder='Enter password'></TextInput>
        </View>

        <TouchableOpacity 
                onPress={()=>OnSignIn()}
                style={styles.button}>
                <Text 
                    style={{color:Colors.White,
                            textAlign:'center',
                            fontFamily:'outfit-bold',
                            fontSize:18,
                            letterSpacing:3
                    }}>Login</Text>
            </TouchableOpacity>
      </View>

      <View>
        <Text style={{
          color:Colors.LightBorder,
          fontSize:20,
          marginTop:30,
          textAlign:'center'
          }}>-------------------------or-------------------------</Text>
      </View>

          <TouchableOpacity 
                  style={{
                    padding:15,
                    backgroundColor:Colors.Primary,
                    borderRadius:12,
                    marginTop:32
                  }}
                  onPress={()=>router.replace('auth/sign-up')}>
                  <Text 
                      style={{color:Colors.White,
                              textAlign:'center',
                              fontFamily:'outfit',
                              fontSize:18,
                      }}>Create an account</Text>
              </TouchableOpacity>

    </View>
  )
};

const styles = StyleSheet.create({
  input:{
    padding:14,
    borderWidth:1,
    borderRadius:8,
    borderColor:Colors.LightBorder
  },
  button:{
    padding:15,
    backgroundColor:Colors.Blue,
    borderRadius:12,
    marginTop:32
  }
})