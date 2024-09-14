import './App.css';
import {LogoComponent} from "./components/helpers/LogoComponent";
import './styles/layout.css'
import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";
import TodoPage from "./pages/todo";


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
