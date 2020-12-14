import React, {memo} from 'react';
import BaseRoute from './route'
import { Provider } from 'react-redux'
import store from './store'
function App() {
  return (
    <Provider store={store}>
      <BaseRoute />
    </Provider>
  );
}
export default memo(App);
