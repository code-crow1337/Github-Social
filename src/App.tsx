import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import "./App.css";
import GitAppBoard from "./components/GitAppBoard";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <div className="App">
          <GitAppBoard />
        </div>
      </Container>
    </>
  );
}

export default App;
