// ## TaskList.js ##
//
// The TaskList component renders a view for a list of tasks.

const React = require('react');

// Define the TaskList component
const TaskList = (props) => {
  
  // A mistake here cause everything to stop functioning
  const taskComponentList = [];

  // missing the let keyword broke the entire page!
  for (let i=0; i<props.myTasks.length; i++) {
    const currentTask = props.myTasks[i]
    taskComponentList.push(
      <Task id={currentTask.id} description={currentTask.description} completed={currentTask.completed} />
    );
  };
  
  const element = (
    <div>
      <h1>{ props.heading }</h1>
        {taskComponentList} 
    </div>
  );
  return element;
};

const Task = (prop) => {
  const element = (
    <li>
      {prop.description} <input type="checkbox" checked={prop.completed} />
    </li>
  );
  return element;
};

// Export the TaskList component
module.exports = TaskList;
