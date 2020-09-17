import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import Searchbar from "./SearchBar";
function GitAppBoard() {
  const [query, setQuery] = useState('code-crow1337');
  
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
      <h1>Im the borad</h1>
      <Searchbar />
      <h3>X's repos:</h3>
      <h3>Following: </h3>
      </Grid>
    </Grid>
  );
}

export default GitAppBoard;
