import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';



const ProductItem = (props) => {


  return (
    <TouchableOpacity style={styles.listItems} activeOpacity={0.5}  onPress={() => props.onSelectProduct(props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
        <Image style={styles.image}  source={{uri: props.image, }} />
      </View>
      <Button  title="Toevoegen aan favorieten" onPress = {() => props.addFavourites(props.id) } />
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
  }
});
export default ProductItem;