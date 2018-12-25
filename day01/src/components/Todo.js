// 这是一个 react 的组件
import React from 'react';
import TodoList from './TodoList';

// class 类的方法定义组件
class Todo extends React.Component {
  // 定义数据（状态）
  constructor() {
    // 改this指向
    super();

    // 定义数据
    this.state = {
      inputVal: '',
      list: []
    }
  }

  // render 函数来定义组件的内容
  // render 函数需要 return return 的才是 组件的模板内容
  render() {
    let inputVal = this.state.inputVal;

    return (
    <div className="todo">
      <input type="text" value={inputVal} onChange={this.handleChange.bind(this)} />
      <button onClick={this.addTodo.bind(this)}>添加</button>

      {/* 传值给TodoList */}
      {/* 这是多行注释 */}
      <TodoList id="123" className="box" todoList={this.state.list} hh={this.deleteTodo.bind(this)}></TodoList>
    </div>
    )
  }

  // 触发 input 响应的方法
  handleChange(e) {
    this.setState({
      inputVal: e.target.value
    })
  }

  addTodo() {
    let newList = [...this.state.list, this.state.inputVal];

    this.setState({
      list: newList,
      inputVal: ''
    })
  }

  /**
   * 删除
   * @param {numer} index 下标
   */
  deleteTodo(index) {
    let newList = this.state.list;
    newList.splice(index, 1);
    this.setState({
      list: newList
    })
  }

}

// 暴露组件
export default Todo;
