import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../components/HomeScreen';
import styles from '../components/Stylesheet';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import ProductDetail from '../components/ProductDetail';
import AddProduct from '../components/AddProduct';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({navigation}) => ({
            headerTitle: '',
            headerStyle: {backgroundColor: '#f2f2f2'},
            headerLeft: () => (
              <TouchableOpacity
                // onPress={() => {
                //   navigation.goBack();
                // }}
                style={[styles.input__inline, {alignItems: 'center'}]}>
                {/* <Image
                style={{
                  height: 12,
                  width: 10,
                  resizeMode: 'contain',
                  marginLeft: 17,
                }}
                source={require('./Images/backArrowWhite_4x.png')}
              /> */}
                <Text style={[styles.bold, {fontSize: 16}]}>
                  UPayments Store
                </Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <View
                style={[
                  styles.input__inline,
                  {
                    alignItems: 'center',
                  },
                ]}>
                <TouchableOpacity style={[styles.header__IconAlign]}>
                  <View>
                    <Image
                      source={require('../Images/search_icon.png')}
                      style={{
                        resizeMode: 'contain',
                        height: 16,
                        width: 16,
                      }}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={({navigation}) => ({
            headerTitle: '',
            headerStyle: {backgroundColor: '#f2f2f2'},
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
                style={[styles.input__inline, {alignItems: 'center'}]}>
                <Image
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: 'contain',
                    marginLeft: -10,
                  }}
                  source={require('../Images/back_arrow.png')}
                />
                <Text style={[styles.bold, {fontSize: 16}]}>
                  Product Detail
                </Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="AddProduct"
          component={AddProduct}
          options={({navigation}) => ({
            headerTitle: '',
            headerStyle: {backgroundColor: '#f2f2f2'},
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
                style={[styles.input__inline, {alignItems: 'center'}]}>
                <Image
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: 'contain',
                    marginLeft: -10,
                  }}
                  source={require('../Images/back_arrow.png')}
                />
                <Text style={[styles.bold, {fontSize: 16}]}>Add Product</Text>
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
