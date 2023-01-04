import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import StackOverflow from "./components/StackOverflow";
import Footer from "./components/Footer";
import AddQuestions from "./components/AddQuestions";
import MainQuestion from "./components/ViewQuestion/MainQuestion";
import Auth from "./components/Auth";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<StackOverflow />}></Route>
        <Route path="/add-question" element={<AddQuestions />}></Route>
        <Route path="/question" element={<MainQuestion />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
