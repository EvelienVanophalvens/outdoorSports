import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

import Details from '../components/detail';


const DetailScreen = ({ route, navigation }) => {
  const { productId } = route.params;
  console.log(productId);

  return (
    <View style={styles.screen}>
       <Details productId={productId}/>

      <Button
        title="Go to overview"
        onPress={() => navigation.navigate('Overview')}
        
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  }
});
export default DetailScreen;