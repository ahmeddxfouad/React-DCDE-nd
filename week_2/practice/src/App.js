import logo from './logo.svg';
import './App.css';
import TodoList from "./components/TodoList";
//this tutorial is all about how to dive more into Props and Hooks in react.
/*
  1. Finish the HW from last time. ->
  2. Add the prop types dependency to define props using npm install --save prop-types. ->
  3. Convert our class components into functional components.
  4. Add useState Hook to trace the changes in TodoLists.
  5. Add useEffect Hook to log the current list of to-dos every time it changes.
*/
function App() {
  return (
      <TodoList/>
  );
}

export default App;
