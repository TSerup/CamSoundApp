import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    text: { 
        fontSize: 18, 
        marginBottom: 10, 
        color: 'white' 
    },
    touchable: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
      },
    fullScreen: {
        width: windowWidth+180,
        height: windowHeight,
      },
  });
  export default styles;