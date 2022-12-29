import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Text, ScrollView, Image, TouchableWithoutFeedback } from 'react-native';


const DetailScreen = ({ route, navigation }) => {

  return (
    <View style={styles.screen}>
       <ScrollView style={styles.info}>
          <Text style={styles.title}>{route.params.title}</Text>
          <Image style={styles.image} source={{uri: route.params.image,}}/>
          <Text style={styles.description}> { route.params.discription} </Text>
      </ScrollView>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Overview')}>
        <Text style = {styles.button}>Ga Naar Overzicht</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
  info:{
    marginBottom: 20,
  },
  image :{
    height: 200,
    width: 200,
  },
  title:{
    fontWeight: "bold",
    fontSize: 20,
    
  },
  button:{
    backgroundColor: "#F37E21",
    color: "white",
    textAlign:"center",
    padding: 10,
    bottom: 25, 
    borderRadius: 5,
    textTransform: "uppercase"
  }
});
export default DetailScreen;