import React from 'react';
import { Animated, Easing } from 'react-native';
import {View,Button,TouchableOpacity} from 'react-native'
import LottieView from 'lottie-react-native';

export default class AnimatedLoad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    this.animation.play(30, 120);
  }

  render() {
    return (
    <View style = {styles.container}>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          source={require('../assets/loading.json')}

        />
        <TouchableOpacity style={styles.knopka} onPress={() => this.props.navigation.navigate('HomeScreen')}>
        </TouchableOpacity>
    </View>

    );
  }
}
const styles = {
    container:{
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    knopka:{
        marginTop : 180,
        width: 20,
        height: 20,
        backgroundColor : '#000'
    }
}