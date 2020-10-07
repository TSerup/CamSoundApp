import { StyleSheet } from 'react-native';

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
  });
  export default styles;