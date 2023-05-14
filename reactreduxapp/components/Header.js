import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {useSelector} from 'react-redux';
import cartImage from '../assets/carts.png';

const Header = () => {
  const cartData = useSelector(state => state.reducer);
  const [cartItems, setCartItems] = useState(0);
  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);
  return (
    <View style={styles.container}>
      <View style={styles.shoping}>
        <Text style={styles.title}>{cartItems}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00B0FF',
    height: 55,
  },
  title: {
    fontSize: 30,
    textAlign: 'right',
    paddingRight: 17,
    paddingTop: 3,
    color: '#000',
  },

  cartImg: {
    width: 35,
    height: 35,
  },
  shoping: {
    marginTop: 2,
    marginLeft: 5,
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});
