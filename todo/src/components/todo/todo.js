import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

import './todo.scss';

export default function ToDo (){

// class ToDo extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     list: [],
  //   };
  // }
  
  const [lists, setLists] = useState([])

  function addItem (item)  {
    item._id = Math.random();
    item.complete = false;
    setLists({ list: [...lists.list, item]});
  };

  function toggleComplete (id){

    let item = lists.list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let list = lists.list.map(listItem => listItem._id === item._id ? item : listItem);
      setLists({list});
    }

  };

  function componentDidMount (){
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
    ];

    setLists({list});
  
  }
  // render() {
    return (
      <>
        <header>
          <h2>
          There are {lists.filter(item => !item.complete).length} Items To Complete
          </h2>
        </header>

        <section className="todo">

          <div>
            <TodoForm handleSubmit={addItem} />
          </div>

          <div>
            <TodoList
              list={lists.list}
              handleComplete={toggleComplete}
            />
          </div>
        </section>
      </>
    );
  }


// export default ToDo;
