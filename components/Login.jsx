import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

export default function Login() {
  return (
    <View>
      <Image 
        source={require('../assets/images/OnBoarding1.jpeg')}
        style={{
            width:'100%',
            height:450
        }}
        ></Image>

        <View style={styles.container}> 
            <Text
                style={{
                    fontSize:28,
                    fontFamily:'outfit-bold',
                    textAlign:'center'
                }}
            >AI Travel Planner</Text>

            <Text
                style={{
                    fontSize:16,
                    textAlign:'center',
                    marginTop:8
                }}
            >
                Discover your next Adcenture effortlessly. Personalized iteneraries at your fingertips. Travel smarter with AI-driven insights.
            </Text>
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
    }
})