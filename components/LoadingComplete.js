import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';

export default class LoadingComponent extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'transparent',
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" color="#be4248" />
      </View>
    );
  }
}
