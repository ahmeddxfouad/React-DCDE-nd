import './App.css';
import {LogoComponent} from "./components/LogoComponent";
import {TodoPage} from "./pages/todo";
import './styles/layout.css'
import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";
//this tutorial is all about how to dive more into React Router in react.
/*
  1. Handle add todo item. -> Done
  2. Add routes to the project. -> Done
  3. Handle Delete todo functionality. -> Done
  4. Let user todo search functionality (H.w).
*/
function App() {

      return (
          <main className='App main-layout'>
            <section className='side-navbar-section'>
              <LogoComponent/>
                <nav className="flex-column">
                    <Link to="/">Home</Link>
                    <Link to="/todos">Todos</Link>
                    <Link to="/about">About Us</Link>
                </nav>
            </section>
           <Routes>
               <Route exact path="/" element={<Home/>} />
               <Route exact path="/todos" element={<TodoPage/>} />
               <Route exact path="/about" element={<AboutUs/>} />
           </Routes>
          </main>
    );
}

export default App;
