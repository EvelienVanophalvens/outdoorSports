import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Text, ScrollView, Image } from 'react-native';


const DetailScreen = ({ route, navigation }) => {


  return (
    <View style={styles.screen}>
       <ScrollView>
          <Text style={styles.title}>{route.params.title}</Text>
          <Image style={styles.image} source={{uri: route.params.image,}}/>
          <Text style={styles.description}> { route.params.discription} </Text>
      </ScrollView>
      <Button
        title="voeg toe aan favorieten"
        onPress={() => navigation.navigate("Favourites", { id: route.params.id,  title: route.params.title, image:route.params.image,  })}
      />

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
export default DetailScreen;