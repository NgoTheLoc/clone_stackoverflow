import { Routes, Route ,Navigate} from "react-router-dom";

import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

import Questions from "./pages/Questions";
import AskQuestion from "./pages/Questions/AskQuestion";
import DetailQuestion from "./pages/Questions/DetailQuestion";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Navigate to="/question" />} />
        <Route exact path="/question" element={<Questions />}>
          <Route path=":id" element={<DetailQuestion />} />
          <Route path="ask" element={<AskQuestion />} />
        </Route>
        <Route exact path="/log-in" element={<Login />}></Route>
        <Route exact path="/sign-up" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
