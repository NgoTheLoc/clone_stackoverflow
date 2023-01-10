import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

import Questions from "./pages/Questions";
import AskQuestion from "./pages/Questions/AskQuestion";
import DetailQuestion from "./pages/Questions/DetailQuestion";

import { login, logout } from "./redux/features/user/userSlice";
import { auth } from "./services/firebase";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to="/question" />} />
        <Route exact path="/question" element={<Questions />}>
          <Route path=":id" element={<DetailQuestion />} />
          <Route path="ask" element={<AskQuestion />} />
        </Route>
        <Route exact path="/log-in" element={<Login />}></Route>
        <Route exact path="/sign-up" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
