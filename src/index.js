import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

//javascript basics
// object
// const user = {
//   name: "jatin",
//   age: 22,
//   greet() {
//     console.log("Hello!");
//   }
// };

// console.log(user.name);
// console.log(user.greet());

// class User2 {
//   constructor(name,age){
//     this.name = name;
//     this.age = age;
//   }
//   greet(){
//     console.log('Hi');
//   }
// };
// const user3 = new User2('jatin',22);
// console.log(user3);
// console.log(user3.greet);

// methods of object like stl
// const user = [22, 33, 44];
// user.push(55);
// for (let i = 0; i < user.length; i++) {
//   console.log(user[i]);
// }
// // const index = user.findIndex((item) => item === 22 );
// // console.log(index);
// const editedUser = user.map((item) => item + 1);
// console.log(editedUser);

// destructuring
// const [first,second] = ['jatin','gandhi'];
// console.log(first);
// console.log(second);

//spread operator
// const user1 = [22,33];
// const user2 = [44];

// const newUser = [...user1,...user2];
// console.log(newUser);

// const user1 = {
//   name: 'jatin',
//   class: 5
// };
// const user2 = {
//   age: 22,
//   ...user1
// };
// console.log(user2);
