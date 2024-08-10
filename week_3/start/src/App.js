import './App.css';
import {LogoComponent} from "./components/LogoComponent";
import {TodoPage} from "./pages/todo";
import './styles/layout.css'
//this tutorial is all about how to dive more into React Router in react.
/*
  1. Handle add todo item.
  2. Add routes to the project.
  3. Handle Delete todo functionality.
  4. Let user choose the priority of the todo item (low, medium, high, urgent) (H.w).
*/
function App() {
  return (
      <main className='App main-layout'>
        <section className='side-navbar-section'>
          <LogoComponent/>
        </section>
        <TodoPage/>
      </main>
)
  ;
}

export default App;
