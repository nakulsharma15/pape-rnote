import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { NoteProvider } from "./Contexts/NoteContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <NoteProvider>
      <Router>
        <App />
      </Router>
    </NoteProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
