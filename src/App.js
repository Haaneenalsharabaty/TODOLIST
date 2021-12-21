import "./App.css";
import Intro from "./Intro";
import NavBar from "./NavBar";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Footer from "./Foteer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDoList from "./ToDoList";
import Tracker from "./money/Tracker";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <Routes>
          <Route exact path="/Intro" element={<Intro />} />

          <Route path="/ToDo" element={<ToDoList />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/SignIn" element={<SignIn />} />
          <Route exact path="/Tracker" element={<Tracker />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
