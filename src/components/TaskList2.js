// import React from 'react';
// Although this should be a newer, preferred way of writing imports now.

// Ths old way
const React = require('react');

// This is not the preferred way of defining a component.
// We prefer the dynamic declaration of components 
class TaskList extends React.Component {
  render() {
    const element = (
      <div>
        {/* This creates a property for the component we named heading */}
        <h1>{ this.props.heading } React Component</h1> 
        <ul>
          <li>Clean my bedsheet</li>
          <li>Finish my homework</li>
          <li>Brush my teeth</li>
        </ul>
      </div>
    );
    return element;
  }
}

// This makes the class TaskList available for others to use TaskList of this file
module.exports = TaskList;
