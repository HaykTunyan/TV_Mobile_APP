import React, { Component } from 'react';
import { View, Image, FlatList, PermissionsAndroid, Platform,TouchableOpacity } from 'react-native';
import CameraRoll from "@react-native-community/cameraroll";
import { SliderBox } from "react-native-image-slider-box"

export default class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data:''
    };
  }

  async componentDidMount(){
    if (Platform.OS === 'android') {
        const result = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Permission Explanation',
            message: 'ReactNativeForYou would like to access your photos!',
          },
        );
        if (result !== 'granted') {
          console.log('Access to pictures was denied');
          return;
        }
      }

      CameraRoll.getPhotos({
        first: 150,
        assetType: 'Photos',
      })
      .then(res => {
      console.log("Resssss",res.edges)
        this.setState({ data: res.edges });
      })
      .catch((error) => {
         console.log(error);
      });

  }
    _onConsole =() =>{
    console.log("sxmec")
   }
  render() {
    return (

      <View>

        <FlatList
        data={this.state.data}
        numColumns={3}
        onPress = {this._onConsole}
        renderItem={({ item,index }) =>
         <Image
           style={{
             width: '33%',
             height: 150,
           }}
           source={{ uri: item.node.image.uri,index }}
         />}
          keyExtractor={(item, index) => index.toString()}
      />
      </View>
    );
  }
}