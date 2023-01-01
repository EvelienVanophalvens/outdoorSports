import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button, Image, ScrollView, TouchableWithoutFeedback} from 'react-native';
import ProductItem from '../components/products';


const OverviewScreen = ({ navigation }) => {
  const [filter, setFilters] =  useState(0);
  const [products, setProducts] = useState([]); 
  const  [favourites, setFavourites] = useState ([]);

  // Functies om de filters in te stellen
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

  const getProducts = async () => { //-> assincrone functie, pas na een tijd uitgevoerd, je weet wanneer, pas api wanneer app al klaar staat
    if(filter === 0){
      try { //stuk code proberen als het niet lukt, error afprinten
        const response = await fetch("https://evelienvanophalvens.be/index.php/wp-json/wp/v2/posts?categories=12&_embed&per_page=20", { //data ophalen alles, response = wat je terugkrijgr van API = resultaat, await= //wachten tot fetch klaar is, !belangrijk!
          "method": "GET", //GET = data ophalen, POST = data verzenden
        })
        const json = await response.json(); //naar het  juiste bestandsformaat omzetten
        setProducts(json);
      } 
      catch (error) {
        console.error(error);  
      }
    }
    else {
      try { //stuk code proberen als het niet lukt, error afprinten
        const response = await fetch("https://evelienvanophalvens.be/index.php/wp-json/wp/v2/posts?categories=12&categories="+ filter +"&_embed&per_page=20", { //data ophalen toegepast op de filter, response = wat je terugkrijgt van API = resultaat, await= //wachten tot fetch klaar is, !belangrijk!
          "method": "GET", //GET = data ophalen, POST = data verzenden
        })
        const json = await response.json(); //naar het  juiste bestandsformaat omzetten
        setProducts(json);
      } 
      catch (error) {
        console.error(error);
      }
    }
  }
  
  useEffect(() => {
    getProducts();
  }, []);

  //functie om iets toetevoegen aan de favorieten
  const addFavourites = (id) => {
    const favourite = products.find( c => c.id == id); //het juiste product zoeken in de array van alle posts
    if(favourites.includes(favourite) === false) { //als het product nog niet terug gevonden is in de array van de favorieten, dan pas toevoegen --> geen dubbele producten
      setFavourites((currentFavourites) => [...currentFavourites, favourite ]  );
    }
  }


  return (
    <View style={styles.screen}>
      <View style = {styles.filters}>
        <TouchableWithoutFeedback  onPress={() => { snowboard(); getProducts(); }}>
          <Text  style = {styles.filter}>snowboard</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback  onPress={() => { ski(); getProducts(); }}>
          <Text  style = {styles.filter}>skiën</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback  onPress={() => { wandelen(); getProducts(); }}>
          <Text  style = {styles.filter}>wandelen</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback  onPress={() => { reset(); getProducts(); }}>
          <Text  style = {styles.filter}>reset</Text>
        </TouchableWithoutFeedback>
      </View>
      <FlatList //lussen, zoals for loop
       style = {styles.products}
       numColumns={2}
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
      <TouchableWithoutFeedback  onPress={() => { navigation.navigate('Favourites', {favourites: favourites} ) }}>
        <Text  style = {styles.button}>Ga Naar Favorieten</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 50,

  },
  filters:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 45,
  },
  filter:{
    backgroundColor: "#F37E21",
    color: "white",
    textAlign:"center",
    borderRadius: 5,
    padding: 7,
    textTransform: "uppercase",
    margin: 7,
  },
  products:{
    bottom:45,

  },
  button:{
    backgroundColor: "#F37E21",
    color: "white",
    textAlign:"center",
    padding: 10,
    bottom: 40, 
    textTransform: "uppercase"
  }
});




export default OverviewScreen