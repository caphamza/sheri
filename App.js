import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';

import {store} from './store';
import {View, Text} from 'react-native'

import NavigatorProvider from './src/navigation/mainNavigator'


console.disableYellowBox = true;

export default class App extends React.Component {

  render = () => {
    return (
      <ReduxProvider store={store}>
        <NavigatorProvider>
          <View><Text>Soccer Project</Text></View>
        </NavigatorProvider>
      </ReduxProvider>
    ) 
  }
}

