import React, { Component } from 'react';
import { View, Text, Image,Button,Dimensions,Animated } from 'react-native';
import FONTS from '../enums/fonts'

const {height, width } = Dimensions.get('window');

export default class SplashScreen extends Component {

  constructor() {
    super();
    this.state = {
      animating: false,
      align: 'center',
      alignsecond: false,
    };
    setTimeout(
      () =>
        this.setState({ align: 'flex-start' }, function() {
          this.setState({
            alignsecond: true,
          });
        }),
      3000
    );
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
            <View style={styles.Splash}>
                  <Image source={require('../assets/images/logoscreen.png')} style={styles.splasImg} />
                      <View style={styles.textSplash}>
                          <Text style={styles.screen}>Screen</Text>
                          <Text style={styles.cast}>Cast</Text>
                      </View>


              </View>
        {!this.state.alignsecond ? null : (
          this.props.navigation.navigate("AnimatedLoad")
        )}
      </View>
    );
  }
}
const styles = {
    Splash :{
        flex:1,
        justifyContent: 'center',
        alignItems : 'center',
        backgroundColor :'#3786eb'
    },
    textSplash:{
        flexDirection : 'row'
    },
    screen:{
        color : '#fff',
        fontSize : 0.08 * width,
        fontFamily: 'JosefinSans-Light',
    },
    splasImg:{
        width: 100,
        height: 100
    },
    cast: {
        color : '#fff',
        fontSize : 0.08 * width,
        fontFamily: 'JosefinSans-Regular',

    }
 }