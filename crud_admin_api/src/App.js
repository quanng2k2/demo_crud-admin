import { Route, Routes } from "react-router-dom";
import "./App.css";
import LayoutNatbar from "./components/layout/LayoutNatbar";
import Home from "./components/page/Home";
import About from "./components/page/About";
import Contact from "./components/page/Contact";
import NotFound from "./components/page/NotFound";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";

function App() {
  return (
    <div className="App">
      <LayoutNatbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/user/add" element={<AddUser />}></Route>
        <Route path="/user/edit/:id" element={<EditUser />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
