import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button, TouchableWithoutFeedback } from 'react-native';



const ProductItem = (props) => {


  return (
    <TouchableOpacity style={styles.listItems} activeOpacity={0.5}  onPress={() => props.onSelectProduct(props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
        <Image style={styles.image}  source={{uri: props.image, }} />
      </View>
      <TouchableWithoutFeedback onPress = {() => props.addFavourites(props.id) }>
        <Text  style = {styles.button}>Toevoegen aan favorieten</Text>
      </TouchableWithoutFeedback>
    </TouchableOpacity >

  );
}

const styles = StyleSheet.create({
  listItems: {
    flex: 1,
    alignItems: 'center',
  },
  listItem: {
    padding: 10,
    marginVertical: 5,
    borderColor: 'grey',
    borderStyle: 'dashed',
    borderWidth: 0.5,
    height: 200,
    alignItems: 'center'
  },
  image:{
    width: 100,
    height: 100,
  },
  button:{
    backgroundColor: "#2196F3",
    color: "white",
    textAlign:"center",
    padding: 10,
  }
});
export default ProductItem;