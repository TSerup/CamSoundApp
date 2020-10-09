import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
import { View, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CamButtons = ({onPressSwitch}:any) => {
  return(
    <View style={buttonStyles.view}>
      <TouchableOpacity
        style={buttonStyles.touchable}>
        <Ionicons
          name="ios-photos"
          style={buttonStyles.icons}
          />
      </TouchableOpacity>
      <TouchableOpacity
        style={buttonStyles.touchable}>
        <FontAwesome
          name="camera"
          style={buttonStyles.icons}
        />
      </TouchableOpacity> 
      <TouchableOpacity
        style={buttonStyles.touchable}>
        <MaterialCommunityIcons
          name="camera-switch"
          style={buttonStyles.icons}
          onPress={onPressSwitch}
        />
      </TouchableOpacity>
    </View>
  );
}

const buttonStyles = StyleSheet.create({
  view: {
    width: windowWidth+35,
    height: windowHeight,
    flexDirection:"row",
    justifyContent:"space-around",
    margin:-15,
  },
  touchable: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  icons: {
    color: "#fff",
    fontSize: 40
  }
});

  export default CamButtons;