import React from 'react';
// import ToDo from './todo.js';



export default function toDoList (props){

  
    return (
      <ul>
        {props.list.map(item => (
          <li
            className={`complete-${item.complete.toString()}`}
            key={item._id}
          >
            <span onClick={() =>props.handleComplete(item._id)}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
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
