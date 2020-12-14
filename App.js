import React, {memo} from 'react';
import BaseRoute from './src/route'
import { Provider } from 'react-redux'
import store from './src/store'

function App() {
  return (
    <Provider store={store}>
      <BaseRoute />
    </Provider>
  );
}
export default memo(App);
