import React, { useState } from 'react';
import { Button, Card, } from 'react-bootstrap';
import useForm from '../hooks/useForm';
import './todo.scss';

export default function TodoForm ({addItem}){
// class TodoForm extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { item: {} };
  // }
 
  const [values, handleInputChange, handleSubmit] = useForm(addItem);

  // const [item, setItem] = useState([])
 
  // function handleInputChange (e) {
  //   setItem( {...item, [e.target.name]: e.target.value } );
  // };

  //  function handleSubmit (e) {
  //   e.preventDefault();
  //   e.target.reset();
  //   props.handleSubmit(item);
  //   const items = {};
  //   setItem(items);
  // };

  // render() {
    return (
      
      <>
         <Card bg="light" className="card">
        <h3>Add To Do Item</h3>
        <form onSubmit={handleSubmit}>
          <label>
            <span>To Do Item</span>
            <input
              name="text"
              placeholder="Add To Do List Item"
              onChange={handleInputChange}
            />
          </label>
          <label>
            <span>Assigned To</span>
            <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
          </label>
          <label>
            <span>Difficulty Rating</span>
            <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
          </label>
          <Button type="submit" className="add-button">Add Item</Button>
        </form>
      </Card>

        {/* <h3>Add Item</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Label>
            <span>To Do Item</span>
            <input
              name="text"
              placeholder="Add To Do List Item"
              onChange={handleInputChange}
            />
          </Form.Label>
          <Form.Label>
            <span>Difficulty Rating</span>
            <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
          </Form.Label>
          <Form.Label>
            <span>Assigned To</span>
            <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
          </Form.Label>
          <Button variant="primary" type="submit">Add Item</Button>
        </Form> */}
      </>
    );
  }


// export default TodoForm;
