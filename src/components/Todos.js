import React from 'react';

const Todos = ({ todos, deleteHandler }) => {
  if (todos.length > 0) {
    return (
      <div>
        {todos.map(({ id, content }) => {
          return (
            <div className="todos collection">
              {
                <div className="collection-item" key={id}>
                  <span
                    onClick={() => {
                      deleteHandler(id);
                    }}
                  >
                    {content}
                    <span class="new badge">To be completed</span>
                  </span>
                </div>
              }
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <p className="center">
        You completed all your todos. It's time to celebrate!!
      </p>
    );
  }
};

export default Todos;
