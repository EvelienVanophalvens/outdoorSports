import {  ImageBackground, StyleSheet} from 'react-native';



const PictureScreen = ({ route, navigation }) => {
  console.log(route.params.picture)
    return(
            <ImageBackground style={styles.image} source={{uri: route.params.picture}}>
            </ImageBackground>
    )

}

const styles = StyleSheet.create({

    image :{
      flex: 1,
      padding: 5,
    },

  });


export default PictureScreen;