import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button} from 'react-native';

import ProductItem from '../components/products';

const OverviewScreen = ({ navigation }) => {
  const [filter, setFilters] =  useState(0);

  const snowboard = () => {
    setFilters((currentfilter) => currentfilter = 1);

  }

  const ski = () => {
    setFilters((currentfilter) => currentfilter = 2); 
  }

  const wandelen = () => {
    setFilters((currentfilter) => currentfilter = 3);

  }

  const reset = () => {
    setFilters((currentfilter) => currentfilter = 0);

  }

  const [products, setProducts] = useState([]); //movies read only, setMovies is een functie om de movies aan te passen 

  const getProducts = async () => { //-> assincrone functie, pas na een tijd uitgevoerd, je weet wanneer, pas api wanneer app al klaar staat
    if(filter === 0){
      console.log(filter); 
    try { //stuk code proberen als het niet lukt, error afprinten
      const response = await fetch("https://evelienvanophalvens.be/index.php/wp-json/wp/v2/posts?categories=12&_embed&per_page=20", { //data ophalen, response = wat je terugkrijgr van API = resultaat, await= //wachten tot fetch klaar is, !belangrijk!
        "method": "GET", //GET = data ophalen, POST = data verzenden
      })
      const json = await response.json(); //naar het  juiste bestandsformaat omzetten
      console.log(json);
      //movies = json.result) mag niet !!!!!!!!!
      setProducts(json);
    } catch (error) {
      console.error(error);
      
    }
  }else if(filter === 1){

    try { //stuk code proberen als het niet lukt, error afprinten
      const response = await fetch("https://evelienvanophalvens.be/index.php/wp-json/wp/v2/posts?categories=12&categories=9&_embed&per_page=20", { //data ophalen, response = wat je terugkrijgr van API = resultaat, await= //wachten tot fetch klaar is, !belangrijk!
        "method": "GET", //GET = data ophalen, POST = data verzenden
      })
      const json = await response.json(); //naar het  juiste bestandsformaat omzetten
      console.log(json);
      //movies = json.result) mag niet !!!!!!!!!
      setProducts(json);
    } catch (error) {
      console.error(error);
      
    }
  }else if(filter === 2){
      try { //stuk code proberen als het niet lukt, error afprinten
        const response = await fetch("https://evelienvanophalvens.be/index.php/wp-json/wp/v2/posts?categories=12&categories=10&_embed&per_page=20", { //data ophalen, response = wat je terugkrijgr van API = resultaat, await= //wachten tot fetch klaar is, !belangrijk!
          "method": "GET", //GET = data ophalen, POST = data verzenden
        })
        const json = await response.json(); //naar het  juiste bestandsformaat omzetten
        console.log(json);
        //movies = json.result) mag niet !!!!!!!!!
        setProducts(json);
      } catch (error) {
        console.error(error);
    }
  }else{
    try { //stuk code proberen als het niet lukt, error afprinten
      const response = await fetch("https://evelienvanophalvens.be/index.php/wp-json/wp/v2/posts?categories=12&categories=8&_embed&per_page=20", { //data ophalen, response = wat je terugkrijgr van API = resultaat, await= //wachten tot fetch klaar is, !belangrijk!
        "method": "GET", //GET = data ophalen, POST = data verzenden
      })
      const json = await response.json(); //naar het  juiste bestandsformaat omzetten
      console.log(json);
      //movies = json.result) mag niet !!!!!!!!!
      setProducts(json);
    } catch (error) {
      console.error(error);
  }
  }

  }
  
  useEffect(() => {
    getProducts();//laad upcomming movies wanneer het scherm laadt 
  }, []);


  return (
    <View style={styles.screen}>
      <View style = {styles.filters}>
        <Touchable onPress={() => { snowboard(); getProducts(); }} title={'snowboard'}/>
        <Button onPress={() => { ski(); getProducts(); }} title={'skiën'}/>
        <Button onPress={() => { wandelen(); getProducts(); }} title={'Wandelen'}/>
        <Button onPress={() => { reset(); getProducts(); }} title={'Reset'}/>
      </View>
      <FlatList //lussen, zoals foor loop
        data={products}
        keyExtractor={item => item.id}//gebruik imdb_id als key voor de flatlist
        renderItem={({ item }) => (
          <ProductItem
            title={item.title.rendered}
            image= {item._embedded['wp:featuredmedia']['0'].source_url}
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
export default OverviewScreen;