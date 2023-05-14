import {Text, View, StyleSheet, Image, Button, ScrollView} from 'react-native';
import React from 'react';
import Header from './components/Header';
import Products from './components/Products';
import iphone from './assets/iphone.jpeg';

function App() {
  const products = [
    {
      name: 'Iphone',
      color: 'black',
      price: 1250000,
      image: iphone,
    },
    {
      name: 'Sumsung Mobile',
      color: 'white',
      price: 100000,
      image: iphone,
    },
    {
      name: 'Nokia Mobile',
      color: 'royalblue',
      price: 130000,
      image: iphone,
    },
    {
      name: 'Redami Mobile',
      color: 'white',
      price: 200000,
      image: iphone,
    },
    {
      name: 'Realme Mobile',
      color: 'royalblue',
      price: 300000,
      image: iphone,
    },
  ];
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        {products.map(item => (
          <Products item={item} />
        ))}
      </ScrollView>
      <Products />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 20,
  },
});
