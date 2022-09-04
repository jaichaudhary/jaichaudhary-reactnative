import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Stylesheet';
import {
  getCategories,
  getProducts,
  removeCategories,
  setCategories,
} from '../store/actions/home';
import {useDispatch, useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

const width = Dimensions.get('window').width;

const HomeScreen = ({navigation}) => {
  const [updatedProducts, setUpdatedProducts] = useState();
  const dispatch = useDispatch();
  const categories = useSelector(state => state.homeReducer.categories);
  const selectedCategories = useSelector(
    state => state.homeReducer.selectedCategories,
  );
  const products = useSelector(state => state.homeReducer.products);

  const updateProducts = products => {
    console.log('selectedCategories selectedCategories', selectedCategories);
    if (selectedCategories.length > 0) {
      const tempArr = products.filter(val => {
        if (selectedCategories.includes(val.category)) {
          return val;
        }
      });
      console.log('tempArr tempArr =========', products);
      setUpdatedProducts(tempArr);
    } else {
      console.log('=========', products);
      setUpdatedProducts(products);
    }
  };

  //   console.log('selected category', updatedProducts);

  useEffect(() => {
    (async function fetchAPI() {
      await dispatch(getCategories());
      const res = await dispatch(getProducts());
      await updateProducts(res.products);
    })();

    // console.log(
    //   'categories selectedCategories ====',
    //   categories,
    //   selectedCategories,
    // );
    return;
  }, [selectedCategories, dispatch]);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProductDetail', {id: item._id});
        }}
        style={[styles.card, {width: width / 2 - 30}]}>
        <View style={[styles.cardStyle, {width: width / 2 - 30}]}>
          <Image
            style={[styles.cardImage, {width: width / 2 - 30}]}
            source={{
              uri: item.avatar,
            }}
          />
        </View>
        <LinearGradient
          colors={['#ffffff', '#000000']}
          style={styles.linearGradient}
        />
        <View style={{backgroundColor: 'black', borderRadius: 8, padding: 8}}>
          <Text style={styles.btn__whiteText}>{item.category}</Text>
          <Text
            style={[
              styles.btn__whiteText,
              {marginTop: 5},
            ]}>{`$${item.price}`}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            display: 'flex',
            flexDirection: 'row',
          }}>
          {!!categories &&
            categories.map((val, index) => {
              if (selectedCategories.includes(val.name)) {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(removeCategories(val.name));
                      updateProducts(updatedProducts);
                    }}
                    key={index + val._id}
                    style={styles.btn}>
                    <Text style={styles.btn__whiteText}>{val.name}</Text>
                  </TouchableOpacity>
                );
              } else {
                return (
                  <TouchableOpacity
                    onPress={async () => {
                      await dispatch(setCategories(val.name));
                      updateProducts(updatedProducts);
                    }}
                    key={index + val._id}
                    style={styles.btn__white}>
                    <Text style={styles.btn__text}>{val.name}</Text>
                  </TouchableOpacity>
                );
              }
            })}
        </ScrollView>
      </View>
      <View
        style={{
          marginBottom: 75,
        }}>
        <FlatList
          data={updatedProducts}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          numColumns={2}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AddProduct');
        }}
        style={{position: 'absolute', right: 20, bottom: 35}}>
        <View style={{backgroundColor: 'white', borderRadius: 50}}>
          <Image
            style={{height: 50, width: 50}}
            source={require('../Images/plus_icon.png')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
