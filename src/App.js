import * as ROUTES from "./constants/routes";

import { Browse, Home, SignIn, SignUp } from "./pages";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import { IsUserRedirect } from "./helpers/routes";
import UserContext from "./context/user";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState({name:"xd"});

    return (
      <UserContext.Provider value={user}>
        <Router>
          <Routes>
            <Route exact path={ROUTES.SIGN_IN} element={<SignIn />} />
            <Route exact path={ROUTES.BROWSE} element={<Browse />} />
            <Route exact path={ROUTES.HOME} element={<Home />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    );
}
