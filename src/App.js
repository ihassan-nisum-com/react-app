import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoListItem from "./TodoListItem";
import AddTodoListItem from "./AddTodoListItem";

const todoList = [
  {
    id: 1,
    description: "generic work"
  },
  {
    id: 2,
    description: "generic work 2"
  }
];

localStorage.setItem("todoList", JSON.stringify(todoList));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: JSON.parse(localStorage.getItem("todoList")),
      id: todoList.length
    };

    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount() {
    const todoList = this.getTodoList();
    this.setState({ todoList });
  }

  getTodoList() {
    return this.state.todoList;
  }
  getId() {
    return this.state.todoList.length;
  }

  onAdd(description) {
    const todoList = this.getTodoList();
    let id = this.getId();

    id = id + 1;
    //console.log(id);
    todoList.push({
      id,
      description
    });

    this.setState({ id });
    this.setState({ todoList });
    //console.log(todoList);
  }

  onDelete(did) {
    const todoList = this.getTodoList();
    const id = this.getTodoList();

    const filteredTodoList = todoList.filter(item => {
      if (item.id !== did) {
        return item;
      } else {
        did = did - 1;
        this.setState({ did });
      }
    });

    this.setState({ todoList: filteredTodoList });
  }

  onEditSubmit(id, description) {
    let todoList = this.getTodoList();

    todoList = todoList.map(item => {
      if (item.id === id) {
        item.description = description;
      }

      return item;
    });

    this.setState({ todoList });
  }

  render() {
    return (
      <div className="App">
        <h1>Simple To-do List Application</h1>
        <AddTodoListItem onAdd={this.onAdd} />

        <h3> Tasks To Do </h3>
        {this.state.todoList.map(item => {
          return (
            <TodoListItem
              key={item.id}
              //spread operator
              {...item}
              onDelete={this.onDelete}
              onEditSubmit={this.onEditSubmit}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
