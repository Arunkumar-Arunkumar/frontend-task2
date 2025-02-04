import '../styles/index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Layout from './Layout';
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;