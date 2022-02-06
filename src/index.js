import "normalize.css";

import App from "./app";
import { FirebaseContext } from './context/firebase';
import { GlobalStyles } from "./global-styles";
import React from "react";
import { firebase } from "./lib/firebase.prod";
import { render } from "react-dom";

render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
