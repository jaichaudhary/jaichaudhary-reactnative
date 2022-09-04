import React, {useState} from 'react';
import {View, Text, Platform, StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import AppStack from './HomeStack';
import LoadingComponent from '../components/LoadingComplete';

export const Status_Bar_Height =
  Platform.OS === 'ios' ? 35 : StatusBar.currentHeight;

// const RootSwitch = createSwitchNavigator({
//   AppStack,
// });

// const AppNavigator = createAppContainer(RootSwitch);

const SwitchComponent = () => {
  const count = useSelector(state => state.loader.count);
  // const [loadingComplete, setLoadingComplete] = useState(false);

  // const _handleError = () => {
  //   console.log('error switch');
  // };

  // const _handleFinish = () => {
  //   setLoadingComplete(true);
  // };

  return (
    <View
      style={{
        flex: 1,
        marginTop: 0,
        // backgroundColor: '#0b224f',
        paddingTop: Platform.OS === 'ios' ? Status_Bar_Height : 0,
      }}>
      <AppStack />
      {count > 0 && <LoadingComponent />}
    </View>
  );
};

export default SwitchComponent;
