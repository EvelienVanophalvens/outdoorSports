import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native';


const Details = props => {
  const [details, setdetails] = useState([]);

  const getdetailsById = async () => {
    try {
      console.log(props.productId);
      const url = encodeURI("https://evelienvanophalvens.be/index.php/wp-json/wp/v2/posts/" +  props.productId + "?_embed&include[]=")
      const response = await fetch(url, {
        "method": "GET",
      })
      const json = await response.json();
      console.log(json);
      setdetails(json);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getdetailsById();
  }, []);

  return (
    console.log(details),
    <ScrollView>
      <Text style={styles.title}>{details.id}</Text>
      <Text style={styles.title}>{details.title.rendered}</Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    margin: 16,
    fontSize: 24,
    textAlign: 'center',
  },
  details: {
    borderWidth: 1,
    padding: 16,
    margin: 8,
  },
  filmPoster: {
    width: '100%',
    height: 450
  },
  release: {
    fontStyle: 'italic',
    fontSize: 12,
    marginTop: 8,
    textAlign: 'right',
  }
});
export default Details;