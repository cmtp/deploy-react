import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import List from './List';

import './Todo.css';

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      task: '',
      items: [],
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  // eslint-disable-next-line camelcase
  componentDidMount() {
    this.setState({
      items: [
        {
          id: uuidv4(),
          task: 'Pagar la renta',
          completed: false,
        },
        {
          id: uuidv4(),
          task: 'Ir de Compras',
          completed: false,
        },
        {
          id: uuidv4(),
          task: 'Reunion a las 7',
          completed: false,
        },
      ],
    });
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    // anadir task a el estado (items)
    this.setState((prevState) => ({
      task: '',
      items: [
        ...prevState.items,
        {
          id: uuidv4(),
          task: prevState.task,
          completed: false,
        },
      ],
    }));
    // actualizar la vista con la tarea
  };

  markAsCompleted = (id) => {
    const foundTask = this.state.items.find((task) => task.id === id);
    foundTask.completed = true;
    this.setState((prevState) => ({
      items: [...prevState.items],
    }));
  };

  removeTask = (id) => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const filteredTasks = this.state.items.filter((task) => task.id !== id);

    this.setState({
      items: filteredTasks,
    });
  };

  handleOnChange(e) {
    // const value = e.target.value;
    const {
      target: { value },
    } = e;
    this.setState({
      task: value,
    });
  }

  render() {
    return (
      <div className="Todo">
        <h1>New Task</h1>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" value={this.state.task} onChange={this.handleOnChange} />
        </form>
        {/* lista */}
        <List items={this.state.items} markAsCompleted={this.markAsCompleted} removeTask={this.removeTask} />
      </div>
    );
  }
}

export default Todo;
