import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StatusBar,
  Platform,
  View,
} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './store';
import {Provider} from 'react-redux';
import SwitchComponent from './navigation/SwitchComponent';

const STATUSBAR_HEIGHT =
  Platform.OS === 'ios'
    ? 1
    : !!StatusBar.currentHeight
    ? StatusBar.currentHeight
    : 20;

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, {backgroundColor}]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

class KeyboardAvoidView extends Component {
  render() {
    Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
    TextInput.defaultProps = {};
    TextInput.defaultProps.allowFontScaling = false;

    return (
      <View style={{flex: 1}}>
        {Platform.OS === 'ios' ? (
          <KeyboardAvoidingView style={{flex: 1}}>
            <MyStatusBar backgroundColor="#0b224f" barStyle={'dark-content'} />
            {this.props.children}
          </KeyboardAvoidingView>
        ) : (
          <View style={{flex: 1}}>
            <MyStatusBar backgroundColor="#0b224f" barStyle={'dark-content'} />
            {this.props.children}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <KeyboardAvoidView>
          <SwitchComponent />
        </KeyboardAvoidView>
      </PersistGate>
    </Provider>
  );
}
