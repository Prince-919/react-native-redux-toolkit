import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import {addToCart, remove_to_cart} from '../redux/action/action.js';
import {useDispatch, useSelector} from 'react-redux';

const Products = props => {
  const item = {...props.item};
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);
  const cartItems = useSelector(state => state.reducer);

  // Add
  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };

  // Remove

  const handleRemoveFormCart = item => {
    dispatch(remove_to_cart(item.name));
  };

  useEffect(() => {
    let result = cartItems.filter(element => {
      return element.name === item.name;
    });
    if (result.length) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartItems]);
  return (
    <>
      <View style={styles.cart}>
        <Image source={item.image} style={styles.img} />
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.title}>{item.price}</Text>
        <Text style={styles.title}>{item.color}</Text>
        {isAdded ? (
          <Button
            title="Remove To Cart"
            onPress={() => handleRemoveFormCart(item)}
          />
        ) : (
          <Button title="Add To Cart" onPress={() => handleAddToCart(item)} />
        )}
      </View>
    </>
  );
};

export default Products;
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  cart: {
    alignItems: 'center',
    borderBottomColor: 'royalblue',
    borderBottomWidth: 2,
    padding: 10,
    marginBottom: 70,
  },
});
