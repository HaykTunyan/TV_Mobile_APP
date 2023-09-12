import React from 'react'
import { View,Image,Text,Button,ImageBackground,StyleSheet,TouchableOpacity,Dimensions } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FONTS from '../../enums/fonts'


const { width } = Dimensions.get('window');

const HomeScreen = (props) =>{

    return(
  <View style={styles.container}>
    <ImageBackground source={require('../../assets/images/bg.gif')} style={styles.image}>
            <View style={styles.dontConnect}>
                 <View style={styles.firstTextBlock}>
                    <Text style={styles.firstText}>Screen</Text>
                    <View style={styles.secondTextBlock}>
                    </View>
                    <Text style={styles.secondText}>C</Text>
                    <Image source={require('../../assets/images/logo.png')} style={styles.imgWidth}/>
                    <Text style={styles.secondText}>st</Text>
                 </View>
                <TouchableOpacity style={styles.dontConnectBlock}>
                    <Text style={styles.connect}>Change TV</Text>
                    <Image source={require('../../assets/images/arrow.png')} style={styles.arrow}/>
                 </TouchableOpacity>
                 <Text style={styles.noTVConnect}>Sony A9G OLED MASTER</Text>
            </View>
            <View style={styles.TVblock}>
                <View style={styles.menuBorder}>
                    <Text style={styles.TVCasting}>TV Casting</Text>
                    <Text style={styles.TVCasting}>Advanced Features</Text>
                </View>
                <View style={styles.Menu}>
                  <View style={styles.MenuCasting}>
                    <TouchableOpacity style={styles.MenuBlock} onPress= {() => props.navigation.navigate('Photos')}>
                        <View style={styles.textImgStyle}>
                            <Image source={require('../../assets/images/photos.png')} />
                            <Text style={styles.textMenuBlock}>PHOTOS</Text>
                        </View>
                    </TouchableOpacity>
                     <TouchableOpacity style={styles.MenuBlock}>
                        <View style={styles.textImgStyle}>
                            <Image source={require('../../assets/images/audio.png')} />
                            <Text style={styles.textMenuBlock}>AUDIO</Text>
                        </View>
                     </TouchableOpacity>
                      <TouchableOpacity style={styles.MenuBlock} onPress= {() => props.navigation.navigate('GoogleDrive')}>
                         <View style={styles.textImgStyle}>
                             <Image source={require('../../assets/images/googleDrive.png')} i/>
                             <Text style={styles.textMenuBlock}>GOOGLE DRIVE</Text>
                         </View>
                      </TouchableOpacity>
                   </View>
                    <View style={styles.MenuCasting}>
                    <TouchableOpacity style={styles.MenuBlock} onPress={() => props.navigation.navigate("Videos")}>
                        <View style={styles.textImgStyle}>
                            <Image source={require('../../assets/images/videos.png')} />
                            <Text style={styles.textMenuBlock}>VIDEOS</Text>
                        </View>
                    </TouchableOpacity>
                     <TouchableOpacity style={styles.MenuBlock} onPress={() => props.navigation.navigate("WebBrowser")}>
                        <View style={styles.textImgStyle}>
                            <Image source={require('../../assets/images/webBrowser.png')} />
                            <Text style={styles.textMenuBlock}>WEB BROWSER</Text>
                        </View>
                     </TouchableOpacity>
                      <TouchableOpacity style={styles.MenuBlock} onPress={() => props.navigation.navigate("DropBox")}>
                         <View style={styles.textImgStyle}>
                             <Image source={require('../../assets/images/dropbox.png')} />
                             <Text style={styles.textMenuBlock}>DROPBOX</Text>
                         </View>
                      </TouchableOpacity>
                   </View>
                </View>

            </View>

    </ImageBackground>
  </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  firstTextBlock:{
    flexDirection : 'row',
    marginLeft : wp("10%")
  },
    secondTextBlock:{

      marginLeft : 15
    },
  firstText:{
    color: '#fff',
    fontSize : 0.12 * width,
    fontFamily: 'JosefinSans-Light',
  },
    secondText:{
      color: '#fff',
      fontSize : 0.12 * width,
      fontFamily: 'JosefinSans-SemiBold',

    },
    imgWidth:{
        marginTop : 40,
        width: 25,
        height : 25
    },
  dontConnect:{
    marginTop : hp('10%')
  },
  dontConnectBlock:{
    flexDirection : 'row',
    backgroundColor : '#77dd77',
    justifyContent : 'space-between',
    marginLeft: wp('10%'),
    height : 50,
    marginTop : 10,
    width: wp("50%"),
    borderWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  arrow:{
    width : 40,
    height: 40,
    marginRight : 10,
    marginTop : 3
  },
  connect:{
    color: '#fff',
    fontFamily: 'JosefinSans-SemiBold',
    fontSize : 0.04 * width,
    marginLeft : 15,
    paddingTop : 7
  },

  noTVConnect:{
    color : '#fff',
    fontFamily: 'JosefinSans-SemiBold',
    marginLeft: wp('12%'),
    fontSize : 0.035 * width
  },
  TVCasting:{
    color: '#fff',
    fontFamily: 'JosefinSans-Regular',
    fontSize : 0.05 * width,
    textAlign : 'right',
    marginBottom :10

  },
    TVblock:{
      marginTop : hp('7%'),
      marginLeft : wp ('22%')
    },
    menuBorder:{
        borderBottomWidth : 1,
        color : '#fff',
        borderBottomColor : '#fff',
        marginTop : 5,
        marginRight : 20
    },
  Menu:{
    flexDirection : 'row',
    marginTop : 10
  },
  MenuBlock:{
    backgroundColor: '#f5f5f5',
    width : 150,
    height : 110,
    borderWidth: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  textImgStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop : 15
  },
  textMenuBlock:{
    fontFamily: 'JosefinSans-SemiBold',
    fontSize : 0.035 * width,
    marginTop : 5
  }
});
export default HomeScreen