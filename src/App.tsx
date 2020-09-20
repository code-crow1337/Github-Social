import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import "./App.css";
import GitAppBoard from "./components/GitAppBoard";

function App() {
  return (
    <>

        <div className="App App-bg">
          <Container maxWidth="lg">
          <GitAppBoard />
          </Container>
        </div>
    </>
  );
}

export default App;
