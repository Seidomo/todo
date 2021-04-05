import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import axios from 'axios'
import useAjax from '../hooks/useAjax'
import './todo.scss';
import NavBar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';



const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';
export default function ToDo (){


  const [request, response] = useAjax([]);
  const [list, setList] = useState([])

  useEffect(() => {
    request({ url: todoAPI });
  }, [request]);

 
  
  useEffect(() => {
    console.log(response);
//     if(!response){
// setList();
//     }else{
//       setList(response);
//     }
//  setList(response);
  }, [response]);


  const getItems = async () => {
    
      let request = await axios({
        method: 'get',
        mode: 'cors',
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
      headers: { 'Content-Type': 'application/json' },
      data: input
    })
    getItems();
    return request;
  };

  const putItems = async (id) => {

    let itemToPut = list.filter(i => i._id === id)[0];
    
    if (itemToPut._id) {
      let request = await axios({
        method: 'put',
        url: `${todoAPI}/${id}`,
        headers: { 'Content-Type': 'application/json' },
        data: {complete: !itemToPut.complete},
      })
      getItems();
      return request;
    }
  }

  const deleteItems = async (id) => {

    let request = await axios({
      method: 'delete',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      url: `${todoAPI}/${id}`,
    })
    getItems();
    return request;
  }


  useEffect(() =>{
    getItems()
  }, [deleteItems, ]);
  


  // useEffect(() => {
  //   let list = [
  //         { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
  //         { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
  //         { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
  //         { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
  //         { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
  //       ];
    
  //       setList(list);
  // }, [])
  
  // render() {
    
  return (
      <>
        <header>
          
          <NavBar bg="primary" variant="dark">
          <Nav>
            <Nav.Link href="">Home</Nav.Link>
          </Nav>
          <Form className= "login">
            <InputGroup>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Form>
          <Form inline >
            <FormControl type="text" placeholder="Password" className="mr-sm-2" />
            <Button variant="dark" type="submit">Login</Button>
          </Form>
        </NavBar>
        <NavBar bg="dark"  className="nav-two">
          <Nav>
            <h2>
              To Do List Manager ({list.filter(item => !item.complete).length}) Items To  Be Completed
            </h2>
          </Nav>
        </NavBar>
        </header>
         
        <section className="todo">

          <div>
            <TodoForm addItem={postItems} />
          </div>

          <div className="todo">
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
