import "./App.css";
import Header from "./components/Header";
import StackOverflow from "./components/StackOverflow";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import AddQuestions from "./components/AddQuestions";
import Main from "./components/Main";
import MainQuestion from "./components/ViewQuestion/MainQuestion";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<StackOverflow />}></Route>
        <Route path="/add-question" element={<AddQuestions />}></Route>
        <Route path="/question" element={<MainQuestion />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
