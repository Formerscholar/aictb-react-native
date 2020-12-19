import React, {memo} from 'react';
import BaseRoute from './src/route';
import {Provider} from 'react-redux';
import store from './src/store';
import {Provider as Providers} from '@ant-design/react-native';
import customTheme from './customTheme';
import {StatusBar} from 'react-native';

function App() {
  return (
    <Providers theme={customTheme}>
      <StatusBar backgroundColor="#E50304" barStyle="light-content" androidtranslucent={true} />
      <Provider store={store}>
        <BaseRoute />
      </Provider>
    </Providers>
  );
}
export default memo(App);
