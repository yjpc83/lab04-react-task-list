// ## Root.js ##
//
// This is our top-level React component which contains all of our other
// components in a tree-like hierarchy. This component is mounted into the
// DOM in "client.js".

const React = require('react');

// Require our TaskList React component from "TaskList.js"
// It basically works like import
const TaskList = require('./TaskList');

// This becomes the properties of TaskList
const tasks = [
 {id: 1, description: 'Clean my bed', completed: false},
 {id: 2, description: 'Finish my homework', completed: true},
 {id: 3, description: 'Brush my teeth', completed: false},	 
];

// Here is where we actually define the Root component. At the moment it just
// contains a single component, TaskList.
const Root = () => {
  const element = <TaskList myTasks={tasks} heading="My Task List" />; // This is JSX syntax
  return element;
};



// Export the Root component
module.exports = Root;
