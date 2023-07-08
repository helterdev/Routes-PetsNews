import "./assets/css/main.css"
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import About from "./pages/About";
import Post from "./pages/Post";


function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/posts/:id" element={<Post/>}/>
          <Route path="*" element={<Page404/>}/>
        </Routes>
      </Router>
       
    </>
  );
}

export default App;
