// import React, { Component } from 'react';
import React from 'react';
// 跟 import React from 'react'; 一样

//引入 Todo组件
import Todo from './components/Todo';

class App extends React.Component {
  render() {
    return (
      <Todo></Todo>
    )
  }
}

export default App;
