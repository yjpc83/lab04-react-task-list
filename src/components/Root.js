// ## Root.js ##
//
// This is our top-level React component which contains all of our other
// components in a tree-like hierarchy. This component is mounted into the
// DOM in "client.js".

const React = require('react');

// Require our TaskList React component from "TaskList.js"
// It basically works like import
const TaskList = require('./TaskList2');

// Here is where we actually define the Root component. At the moment it just
// contains a single component, TaskList.
const Root = () => {
  const element = <TaskList heading="My task list" />; // This is JSX syntax
  return element;
};

// Export the Root component
module.exports = Root;
