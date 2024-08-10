import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native';

export default function Login() {

  const router = useRouter();

  return (
    <View>
      <Image 
        source={require('../assets/images/OnBoarding1.jpeg')}
        style={{
            width:'100%',
            height:520
        }}
        ></Image>

        <View style={styles.container}> 
            <Text
                style={{
                    fontSize:30,
                    fontFamily:'outfit-bold',
                    textAlign:'center',
                    marginTop:8
                }}
                >AI Travel Planner</Text>

            <Text
                style={{
                    fontSize:20,
                    fontFamily:'outfit',
                    textAlign:'center',
                    marginTop:16,
                    color:Colors.Gray,
                    lineHeight:28
                }}
            >
                Discover your next Adventure effortlessly. Personalized iteneraries at your fingertips. Travel smarter with AI-driven insights.
            </Text>

            <TouchableOpacity 
                style={styles.button}
                onPress={()=>router.push('auth/sign-in')}>
                <Text 
                    style={{color:Colors.White,
                            textAlign:'center',
                            fontFamily:'outfit-bold',
                            fontSize:18,
                            letterSpacing:3
                    }}>Get Started</Text>
            </TouchableOpacity>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.White,
        marginTop:-20,
        height:'100%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:15
    },
    button:{
        padding:15,
        backgroundColor:Colors.Primary,
        borderRadius:12,
        marginTop:'25%'
    }
})