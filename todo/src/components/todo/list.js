import React from 'react';
import { SettingsContext } from '../context/settings.js';
// import ToDo from './todo.js';
import Toast from 'react-bootstrap/Toast';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import './todo.scss';



export default function toDoList (props){
  const styles = {
    pill: { cursor: 'pointer' },
  };
  
    return (
      <ul>
          {props.list.map(item => (
            <Card id="list" bg="light" className={`complete-${item.complete.toString()}`} onClick={() => props.handleComplete(item._id)}
            key={item._id}>
            <Toast.Header className="exit-button" key={item._id} onClose={() => props.handleDelete(item._id)}>
              <Badge
                pillstyle={styles.pill}
                variant={item.complete ? 'danger' : 'success'}
                onClick={() => props.handleComplete(item._id)}
              >
                {!item.complete ? 'Pending' : 'Complete'}
              </Badge>
              <strong className="mr-auto">{item.assignee}</strong>
            </Toast.Header>
            <Card.Body>
              <blockquote className="blockquote">
                <p>
                  {item.text}
                </p>
                <footer className="blockquote-footer">Difficulty:{item.difficulty}</footer>
              </blockquote>
            </Card.Body>
          </Card>
          ))}
        </ul>



      // <ul>
      //   {props.list.map(item => (
      //     <li
      //       className={`complete-${item.complete.toString()}`}
      //       key={item._id}
      //     >
      //       <span onClick={() =>props.handleComplete(item._id)}>
      //         {item.text}
      //       </span>
      //     </li>
      //   ))}
      // </ul>
    );
  }


// class TodoList extends React.Component {

//   render() {
//     return (
//       <ul>
//         {this.props.list.map(item => (
//           <li
//             className={`complete-${item.complete.toString()}`}
//             key={item._id}
//           >
//             <span onClick={() => this.props.handleComplete(item._id)}>
//               {item.text}
//             </span>
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }

// export default TodoList;
