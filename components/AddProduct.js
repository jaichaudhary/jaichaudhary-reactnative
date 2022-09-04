import {
  View,
  Text,
  ScrollView,
  TextInput,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Stylesheet';
import {addProduct, getCategories} from '../store/actions/home';
import {useDispatch, useSelector} from 'react-redux';

const AddProduct = ({navigation}) => {
  const [value, setValue] = useState({
    title: '',
    price: 0,
    desc: '',
    image: '',
  });
  const [isFocused, setIsFocused] = useState({
    isTitle: false,
    isPrice: false,
    isDesc: false,
    isImage: false,
  });

  const [category, setCategory] = useState([]);

  const dispatch = useDispatch();
  const categories = useSelector(state => state.homeReducer.categories);
  const selectedCategories = useSelector(
    state => state.homeReducer.selectedCategories,
  );

  useEffect(() => {
    (async function fetchAPI() {
      await dispatch(getCategories());
    })();
    return;
  }, [selectedCategories, dispatch]);

  const addProductDetails = async () => {
    const payload = {
      name: value.title,
      price: value.price,
      category: category,
      description: value.desc,
      avatar: value.image,
      developerEmail: 'jai.chaudhary.1044@gmail.com',
    };
    const res = await dispatch(addProduct(payload));
    return res;
  };

  const handleFocus = suffix => setIsFocused({...isFocused, [suffix]: true});
  const handleBlur = suffix => setIsFocused({...isFocused, [suffix]: false});

  const labelStyle = suffix => {
    return {
      position: 'absolute',
      left: !isFocused[suffix] ? 15 : 0,
      top: !isFocused[suffix] ? 12 : -20,
      fontSize: !isFocused[suffix] ? 14 : 12,
      color: !isFocused[suffix] ? '#aaa' : '#000',
      opacity: !isFocused[suffix] ? 0 : 1,
    };
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          marginTop: 20,
        }}>
        <View style={{marginTop: 10}}>
          <Text style={labelStyle('isTitle')}>Product Title</Text>
          <TextInput
            style={styles.textInput}
            value={value.title}
            placeholder={!isFocused.isTitle ? 'Product Title' : ''}
            onChangeText={text => setValue({...value, title: text})}
            onFocus={() => {
              handleFocus('isTitle');
            }}
            onBlur={() => {
              handleBlur('isTitle');
            }}
          />
        </View>
        <View style={{marginTop: 30}}>
          <Text style={labelStyle('isPrice')}>Price</Text>
          <TextInput
            style={styles.textInput}
            value={value.price}
            placeholder={!isFocused.isPrice ? 'Price' : ''}
            onChangeText={text => setValue({...value, price: text})}
            onFocus={() => {
              handleFocus('isPrice');
            }}
            onBlur={() => {
              handleBlur('isPrice');
            }}
          />
        </View>
        <View style={{marginTop: 30}}>
          <Text style={labelStyle('isDesc')}>Description</Text>
          <TextInput
            style={styles.textInput}
            value={value.desc}
            placeholder={!isFocused.isDesc ? 'Description' : ''}
            onChangeText={text => setValue({...value, desc: text})}
            onFocus={() => {
              handleFocus('isDesc');
            }}
            onBlur={() => {
              handleBlur('isDesc');
            }}
          />
        </View>
        <View style={{marginTop: 30}}>
          <Text style={labelStyle('isImage')}>Image Link</Text>
          <TextInput
            style={styles.textInput}
            value={value.image}
            placeholder={!isFocused.isImage ? 'Image Link' : ''}
            onChangeText={text => setValue({...value, image: text})}
            onFocus={() => {
              handleFocus('isImage');
            }}
            onBlur={() => {
              handleBlur('isImage');
            }}
          />
        </View>
        <View>
          <Text style={{marginTop: 15, fontSize: 12}}>{`Selected Category : ${
            category.length > 0 ? category : ''
          }`}</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              display: 'flex',
              flexDirection: 'row',
            }}>
            {!!categories &&
              categories.map((val, index) => {
                if (category.includes(val.name)) {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        setCategory(val.name);
                        // dispatch(removeCategories(val.name));
                        //   updateProducts(updatedProducts);
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
                        setCategory(val.name);
                        // await dispatch(setCategories(val.name));
                        //   updateProducts(updatedProducts);
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
      </ScrollView>
      <View
        style={{
          display: 'flex',
          flexGrow: 1,
          alignSelf: 'center',
          justifyContent: 'flex-end',
          marginBottom: 10,
        }}>
        <TouchableOpacity
          onPress={async () => {
            if (
              value.title !== '' &&
              Number(value.price) > 0 &&
              value.desc !== '' &&
              value.image !== ''
            ) {
              const response = await addProductDetails();
              if (response.message === 'Success') {
                navigation.reset({
                  index: 1,
                  routes: [{name: 'Home'}],
                });
              } else {
                alert(response.message);
              }
            } else {
              alert('All the details are mandatory');
            }
          }}
          style={styles.btn}>
          <Text style={styles.btn__whiteText}>Add Product</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddProduct;
