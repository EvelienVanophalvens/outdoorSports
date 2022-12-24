import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Image} from 'react-native';

import ProductItem from '../components/products';



const OverviewScreen = ({ navigation }) => {
  const [filter, setFilters] =  useState(0);

  const snowboard = () => {
    setFilters((currentfilter) => currentfilter = 9);

  }

  const ski = () => {
    setFilters((currentfilter) => currentfilter = 10); 
  }

  const wandelen = () => {
    setFilters((currentfilter) => currentfilter = 8);

  }

  const reset = () => {
    setFilters((currentfilter) => currentfilter = 0);

  }




  const [products, setProducts] = useState([]); 

  const getProducts = async () => { //-> assincrone functie, pas na een tijd uitgevoerd, je weet wanneer, pas api wanneer app al klaar staat
    if(filter === 0){
      console.log(filter); 
    try { //stuk code proberen als het niet lukt, error afprinten
      const response = await fetch("https://evelienvanophalvens.be/index.php/wp-json/wp/v2/posts?categories=12&_embed&per_page=20", { //data ophalen, response = wat je terugkrijgr van API = resultaat, await= //wachten tot fetch klaar is, !belangrijk!
        "method": "GET", //GET = data ophalen, POST = data verzenden
      })
      const json = await response.json(); //naar het  juiste bestandsformaat omzetten
      console.log(json);
      setProducts(json);
    } catch (error) {
      console.error(error);
      
    }
  }else {
    try { //stuk code proberen als het niet lukt, error afprinten
      const response = await fetch("https://evelienvanophalvens.be/index.php/wp-json/wp/v2/posts?categories=12&categories="+ filter +"&_embed&per_page=20", { //data ophalen, response = wat je terugkrijgr van API = resultaat, await= //wachten tot fetch klaar is, !belangrijk!
        "method": "GET", //GET = data ophalen, POST = data verzenden
      })
      const json = await response.json(); //naar het  juiste bestandsformaat omzetten
      console.log(json);
  
      setProducts(json);
    } catch (error) {
      console.error(error);
      
    }
  }
  

  }
  
  useEffect(() => {
    getProducts();
  }, []);


   const  [favourites, setFavourites] = useState ([]);

  const addFavourites = (id) => {

    const favourite = products.find( c => c.id == id);

    setFavourites((currentFavourites) => [...currentFavourites, favourite ]  );

    console.log(favourites);

  }




  return (
    <View style={styles.screen}>
      <View>
        <Image>
          
        </Image>
        <Text>0</Text>
      </View>
      <View style = {styles.filters}>
        <Button onPress={() => { snowboard(); getProducts(); }} title={'snowboard'}/>
        <Button onPress={() => { ski(); getProducts(); }} title={'skiën'}/>
        <Button onPress={() => { wandelen(); getProducts(); }} title={'Wandelen'}/>
        <Button onPress={() => { reset(); getProducts(); }} title={'Reset'}/>
      </View>
      <FlatList //lussen, zoals for loop
        data={products}
        renderItem={({ item }) => (
          <ProductItem
            id = {item.id}
            title={item.title.rendered}
            image= {item._embedded['wp:featuredmedia']['0'].source_url}
            addFavourites={addFavourites}
            onSelectProduct={(selectedId) => { navigation.navigate('Detail', { id: selectedId,  title: item.title.rendered, image: item._embedded['wp:featuredmedia']['0'].source_url, discription: item.content.rendered,  }) }}
          />
        )}
      />
    </View >
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  filters:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});




export default OverviewScreen