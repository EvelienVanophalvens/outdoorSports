import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Image, FlatList} from 'react-native';

import FavouritesItem from '../components/favouritesItem';


const FavouritesScreen = ({ route, navigation }) => {
    console.log(route.params.favourites);

    return(
    <View>
         <FlatList //lussen, zoals for loop
        data={route.params.favourites}
        renderItem={({ item }) => (
          <FavouritesItem
            id = {item.id}
            title={item.title.rendered}
            image= {item._embedded['wp:featuredmedia']['0'].source_url}
          />
        )}
      />
    </View>

    )

}

export default FavouritesScreen;