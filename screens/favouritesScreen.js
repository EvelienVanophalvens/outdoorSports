import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Image} from 'react-native';



const FavouritesScreen = ({ route, navigation }) => {
    return (
        <View style={styles.screen}>
           <ScrollView>
              <Text style={styles.title}>{route.params.title}</Text>
              <Image style={styles.image} source={{uri: route.params.image,}}/>
          </ScrollView>
          <Button
            title="Ga naar overzicht"
            onPress={() => navigation.navigate('Overview')} 
          />
        </View>
      );
    }
    const styles = StyleSheet.create({
      screen: {
        flex: 1,
        justifyContent: 'center',
      },
      image :{
        height: 200,
        width: 200,
      }
    });



export default FavouritesScreen;