import React from 'react';
import Child from './Child'
import {Provider} from 'react-redux'
import store from './store/index'

function App() {
    console.log(store);
  return (
      <Provider store={store}>
          <div className="App">
              <h1>Hello,React! </h1>
              <Child data="父类传递过去的数据data..." />
          </div>
      </Provider>
  );
}

export default App;
