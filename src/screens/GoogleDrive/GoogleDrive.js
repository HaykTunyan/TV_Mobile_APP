import React,{useState} from 'react'
import {View,Text,Image,ImageBackground,TextInput,StyleSheet,Dimensions,TouchableOpacity,Button } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
const {height, width } = Dimensions.get('window');

const GoogleDrive = (props) =>{

    return (
        <View style={styles.container}>

            <ImageBackground source={require('../../assets/images/bg.gif')} style={styles.image}>


                <View style={styles.LoginUser}>

                    <TouchableOpacity style={styles.Continue}>
                        <Text  style={styles.ContinueText}>Continue with Google</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent : 'center'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },

  Continue:{
    width : wp('80%'),
    backgroundColor : '#fff',
    height : 50,
      borderWidth : 1,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      marginLeft : wp('10%'),
      marginTop : height / 2
  },
  ContinueText: {
    fontFamily: 'JosefinSans-Regular',
    fontSize : 0.05 * width,
    textAlign : 'center',
    marginTop : 5
  },


  })
export default GoogleDrive