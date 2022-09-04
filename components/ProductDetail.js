import {View, Text, ScrollView, Image, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getProductDetails} from '../store/actions/home';
import {useDispatch} from 'react-redux';
import styles from './Stylesheet';
import LinearGradient from 'react-native-linear-gradient';

const width = Dimensions.get('window').width;

const ProductDetail = ({route}) => {
  const productId = route?.params?.id;
  const [detail, setDetail] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    (async function fetchAPI() {
      const res = await dispatch(getProductDetails(productId));
      setDetail(res?.product);
    })();
    return;
  }, [productId, dispatch]);
  return (
    <View style={{flex: 1}}>
      <View>
        <Image
          style={[{width: width, height: 300, resizeMode: 'contain'}]}
          source={{
            uri: detail?.avatar,
          }}
        />
      </View>
      <LinearGradient
        colors={['#ffffff', '#000000']}
        style={[styles.linearGradient, {padding: 35}]}
      />
      <View
        style={{
          backgroundColor: 'black',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          padding: 8,
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}>
        <View
          style={[
            styles.input__inline,
            {justifyContent: 'space-between', alignItems: 'center'},
          ]}>
          <Text style={[styles.btn__whiteText, {fontSize: 23}]}>
            {detail?.name}
          </Text>
          <Text style={styles.btn__whiteText}>{`$${detail?.price}`}</Text>
        </View>
        <ScrollView contentContainerStyle={{marginTop: 10}}>
          <Text style={[styles.btn__whiteText, {fontWeight: '400'}]}>
            {detail?.description}
          </Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default ProductDetail;
