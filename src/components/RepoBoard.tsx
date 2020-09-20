import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import RepoHead from "./RepoHead";
import { userData, Repo } from "../../types";
import GitCard from "./GitCard";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  container: {
    marginTop: 16,
    marginBottom: 16,
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
});

const ReposCards = ({ repos }: { repos: Repo[] }): any => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.container}>
        {repos.map((repo: Repo) => {
          return <GitCard repoInfo={repo} />;
        })}
    </Grid>
  );
};
export default function RepoBoard({
  userData,
}: {
  userData: userData;
}): React.ReactElement {
  console.log(userData);
  const {
    userInfo: { login },
    repos,
  } = userData;
  return (
    <div>
      <RepoHead name={login} />
      <ReposCards repos={repos} />
    </div>
  );
}