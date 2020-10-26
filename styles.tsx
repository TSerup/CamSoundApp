import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject, 
      width: width+180
    },
    closeButtonArea: {
      position: "absolute",
      top: 40,
      left: 20,
      height: 80,
      width: 80,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "transparent",
    },
    closeButton: {
      height: 60,
      width: 60,
      justifyContent: "center",
      alignItems: "center",
      fontSize: 50,
      color: '#fff',
      opacity: 0.5
    },
    recordIndicatorContainer: {
      flexDirection: "row",
      position: "absolute",
      top: 25,
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "transparent",
      opacity: 0.7,
    },
    text: {
      color: "#fff",
    },
    touchable: {
      alignSelf: 'flex-end',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    icons: {
      color: "#fff",
      fontSize: 40
    },
    view: {
      width: width+35,
      height: height,
      flexDirection:"row",
      justifyContent:"space-around",
       margin:-15,
    },
  });
  export default styles;