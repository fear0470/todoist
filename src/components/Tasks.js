import React from 'react';

export const Tasks = () => {
  const tasks = [];

  let projectName = '';

  return ( 
    <div> className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>

      <ul className"tasks__list">
        {tasks.map(task=> (
          <li key={`${task.id}`}
          ))}

      </ul>
    </div>

    )
}