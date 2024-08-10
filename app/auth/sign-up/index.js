import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import {Colors} from '../../../constants/Colors'
import Logo from '../../../assets/images/logoipsum.png'

export default function SingUp() {
  const navigation = useNavigation();
  const router = useRouter();
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
      }}>Create an account</Text>

      <Text style={{
        fontFamily:'outfit',
        fontSize:16,
        marginTop:12,
        color:Colors.Gray
      }}>Let's get started and plan your next trip</Text>


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

        <View style={{
          marginTop:28
        }}>
          <Text style={{
            fontFamily:'outfit-bold',
            marginBottom:4
          }}>Password</Text>
          <TextInput style={styles.input} secureTextEntry={true} placeholder='Enter password'></TextInput>
        </View>

        <TouchableOpacity 
                style={styles.button}>
                <Text 
                    style={{color:Colors.White,
                            textAlign:'center',
                            fontFamily:'outfit-bold',
                            fontSize:18,
                            letterSpacing:3
                    }}>SignUp</Text>
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
                      }}>Login</Text>
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