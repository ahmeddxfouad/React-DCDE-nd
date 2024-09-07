import './App.css';
import {LogoComponent} from "./components/LogoComponent";
import {TodoPage} from "./pages/todo";
import './styles/layout.css'
import {Link, Route, Routes} from "react-router-dom";
import React from "react";
import AddTodo from "./components/AddTodo";
import HomePage from "./components/HomePage";
//this tutorial is all about how to dive more into React Router in react.
/*
  1. Handle add todo item.
  2. Add routes to the project
  2. Handle Delete todo functionality.
  3. Make the todo search functionality (H.w).
*/
function App() {
  return (
        <main className='App main-layout'>
              <section className='side-navbar-section'>
                  <LogoComponent/>
                  <nav className="flex-column">
                      <Link to="/home">Home</Link>
                      <Link to="/todos">Todos</Link>
                  </nav>
              </section>
              <Routes>
                  <Route
                      exact
                      path="/todos"
                      element={
                      <TodoPage/>
                      }
                      />
                  <Route
                      path="/home"
                      element={
                          <HomePage/>
                      }/>
              </Routes>
      </main>
);
}

export default App;
