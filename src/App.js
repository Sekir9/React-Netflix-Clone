import * as ROUTES from "./constants/routes";

import { Browse, Home, Signin, Signup } from "./pages";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/browse" element={<Browse />}/>
        <Route exact path="/signup" element={<Signup />}/>
        <Route exact path="/signin" element= {<Signin />}/>
        <Route exact path="/signup" element={<Signup />}/>
        <Route exact path={ROUTES.HOME} element= {<Home />}/>
      </Routes>
    </Router>
  );
}
