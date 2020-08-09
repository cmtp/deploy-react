import React from 'react';
import PropTypes from 'prop-types';

const List = (props) => (
  <div className="List">
    <h2>Lista de tareas</h2>
    <ul>
      {props.items.map((item, key) => (
        <li key={key} className={`${item.completed ? 'completed' : 'pending'}`}>
          <span>{item.task}</span>
          <div className="actions">
            <button
              type="button"
              className={item.completed ? 'hide' : 'done'}
              onClick={() => props.markAsCompleted(item.id)}
            >
              Completar
            </button>
            <button type="button" className="trash" onClick={() => props.removeTask(item.id)}>
              Remover
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

List.propTypes = {
  items: PropTypes.array,
  markAsCompleted: PropTypes.func,
  removeTask: PropTypes.func,
};

export default List;
