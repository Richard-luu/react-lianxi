// todolist 的demo
import React from 'react';

class TodoList extends React.Component {
   // 子组件中通过  this.props 取得 父组件给子组件传递的内容，是一个大对象 this.props.todoList
  render() {
    return (
      <ul>
        {
          this.props.todoList.map((item, i) => {
            return (
              <li key={i}>
                {item}
                <span onClick={this.deleteItem.bind(this, i)}> &times;</span>
              </li>
            )
          })
        }
      </ul>
    )
  }

  deleteItem(i) {
    this.props.hh(i)
  }
}

export default TodoList;
