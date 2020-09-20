import React, { useState, useReducer, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { fade } from '@material-ui/core/styles/colorManipulator';
import Grid from "@material-ui/core/Grid";
import Searchbar from "./GitSearchBar";
import RepoBoard from "./RepoBoard";
import GitCard from './GitCard';

const useStyles = makeStyles({
  container: {
    backgroundColor: fade('#fff',0.7),
  }
});
const initialState = { loading: true };

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "updateState":
      return { loading: false, userData: action.payload };
    default:
      return state;
  }
};
function GitAppBoard() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const classes = useStyles();
  const renderUserInfo = () => {
  return state.userData ?  <RepoBoard userData={state.userData} /> : '';
 
  };
  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={12}>
        <h1>Github Users Information</h1>
        <Searchbar dispatch={dispatch} />
        {renderUserInfo()}
      </Grid>
    </Grid>
  );
}

export default GitAppBoard;
