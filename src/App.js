import * as ROUTES from "./constants/routes";

import { Browse, Home, SignIn, SignUp,  } from "./pages";
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";

import UserContext from "./context/user";
import { useAuthListener } from "./hooks";

export default function App() {
  const { user } = useAuthListener();

    return (
      <UserContext.Provider value={user}>
        <Router>
          <Routes>
            <Route exact path={ROUTES.SIGN_IN} element={<SignIn />} />
            <Route exact path={ROUTES.SIGN_UP} element={<SignUp />} />
            <Route exact path={ROUTES.BROWSE} element={<Browse />} />
            <Route exact path={ROUTES.HOME} element={<Home />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    );
}
