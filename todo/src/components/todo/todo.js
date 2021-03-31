import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import axios from 'axios'
import './todo.scss';


const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';
export default function ToDo (){


  
  const [list, setList] = useState([])


  const getItems = async () => {
    
      let request = await axios({
        method: 'get',
        url: todoAPI
      })

      let data = request.data.results;
      setList(data);
   
  }

  useEffect(() =>{
    getItems()
  }, []);

  const postItems = async (input) => {
    let request = await axios({
      method: 'post',
      url: todoAPI,
      data: input
    })
    getItems();
    console.log(request);
    return request;
  };

  const putItems = async (id) => {

    let itemToPut = list.filter(i => i._id === id)[0];
    
    if (itemToPut._id) {
      let request = await axios({
        method: 'put',
        url: `${todoAPI}/${id}`,
        data: {complete: !itemToPut.complete},
      })
      getItems();
      return request;
    }
  }

  const deleteItems = async (id) => {

    let request = await axios({
      method: 'delete',
      url: `${todoAPI}/${id}`,
    })
    getItems();
    return request;
  }

  

//  const addItem = (item) => {
//     item._id = Math.random();
//     item.complete = false;
//     setList([...list, item]);
//   };

//   const toggleComplete = id =>{

//     let item = list.filter(i => i._id === id)[0] || {};

//     if (item._id) {
//       item.complete = !item.complete;
//       let lists = list.map(listItem => listItem._id === item._id ? item : listItem);
//       setList({lists});
//     }

//   };

  // function componentDidMount (){
  //   let list = [
  //     { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
  //     { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
  //     { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
  //     { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
  //     { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
  //   ];

  //   setLists({list});
  
  // }

  useEffect(() => {
    let list = [
          { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
          { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
          { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
          { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
          { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
        ];
    
        setList(list);
  }, [])
  // render() {
    return (
      <>
        <header>
          <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
          </h2>
        </header>

        <section className="todo">

          <div>
            <TodoForm addItem={postItems} />
          </div>

          <div>
            <TodoList
              list={list}
              handleComplete={putItems}
              handleDelete={deleteItems}
            />
          </div>
        </section>
      </>
    );
  }


// export default ToDo;
