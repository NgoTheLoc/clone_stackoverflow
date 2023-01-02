import "./App.css";
import Header from "./components/Header";
import StackOverflow from "./components/StackOverflow";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<StackOverflow />}></Route>
        {/* <Route path="/" element={<StackOverflow />}></Route>
        <Route path="/" element={<StackOverflow />}></Route>
        <Route path="/" element={<StackOverflow />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
