import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import "./App.css";
import GitAppBoard from "./components/GitAppBoard";

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <Container maxWidth="lg">
          <GitAppBoard />
        </Container>
      </div>
    </>
  );
}

export default App;
