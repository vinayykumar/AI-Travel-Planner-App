import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import {Colors} from '../../../constants/Colors'
import Logo from '../../../assets/images/logoipsum.png'
import Ionicons from '@expo/vector-icons/Ionicons'; 
import { auth } from "../../../configs/FirebaseConfig.js";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

export default function SingUp() {
  const navigation = useNavigation();
  const router = useRouter();

  const [fullname,setFullname] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  useEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },);

  const OnCreateAccount = ()=> {
    if(!(email?.length>0 || fullname?.length>0 || password?.length>0)){
      ToastAndroid.show('Invalid Details',ToastAndroid.BOTTOM);
      return;
    }
      createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
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
        
      <View>
        <Image 
          source={require('../../../assets/images/logoipsum.png')}
          style={{
              width:'12%',
              height:24,
              marginTop:24
          }}
          ></Image>
      </View>

      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30,
        marginTop:24
      }}>Create an account</Text>

      <Text style={{
        fontFamily:'outfit',
        fontSize:16,
        marginTop:12,
        color:Colors.Gray
      }}>Let's get started and plan your next trip</Text>


      <View style={{
        marginTop:32
      }}>
        
        <View>
          <Text style={{
            fontFamily:'outfit-bold',
            marginBottom:4
          }}>Full Name</Text>
          <TextInput 
              style={styles.input}  
              placeholder='Enter Full Name'
              onChangeText={(value)=>setFullname(value)}
              ></TextInput>
        </View>

        <View style={{
          marginTop:24
        }}>
          <Text style={{
            fontFamily:'outfit-bold',
            marginBottom:4
          }}>Email</Text>
          <TextInput 
              style={styles.input}  
              placeholder='Enter your email'
              onChangeText={(value)=>setEmail(value)}
              ></TextInput>
        </View>

        <View style={{
          marginTop:24
        }}>
          <Text style={{
            fontFamily:'outfit-bold',
            marginBottom:4
          }}>Password</Text>
          <TextInput 
              style={styles.input} 
              secureTextEntry={true} 
              placeholder='Enter password'
              onChangeText={(value)=>setPassword(value)}
              ></TextInput>
        </View>

        <TouchableOpacity 
                style={styles.button}
                onPress={()=>OnCreateAccount()}
                >
                <Text 
                    style={{color:Colors.White,
                            textAlign:'center',
                            fontFamily:'outfit-bold',
                            fontSize:18,
                            letterSpacing:3
                    }}>SignUp</Text>
            </TouchableOpacity>
      </View>

        <Text style={{
          color:Colors.LightBorder,
          fontSize:20,
          marginTop:20,
          textAlign:'center'
          }}>-------------------------or-------------------------</Text>

          <Text style={{
            color:Colors.Gray,
            marginTop:12
            }}>Already have an account?</Text>

          <TouchableOpacity 
                  style={{
                    padding:15,
                    backgroundColor:Colors.Primary,
                    borderRadius:12,
                    marginTop:12
                  }}
                  onPress={()=>router.replace('auth/sign-in')}>
                  <Text 
                      style={{color:Colors.White,
                              textAlign:'center',
                              fontFamily:'outfit-medium',
                              fontSize:18,
                      }}>Login
                  </Text>
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