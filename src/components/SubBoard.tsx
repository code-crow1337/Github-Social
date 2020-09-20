import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HeadTitle from "./HeadTitle";
import { User, Follower } from "../../types";
import Grid from "@material-ui/core/Grid";
import UserDetails from "./UserDetails";

const useStyles = makeStyles({
  container: {
    marginTop: 16,
    marginBottom: 16,
  },
});

const renderSubs = (following: Follower[]): any => {
  return (
    <>
      {following.map((user: Follower) => {
        return (
          <UserDetails
            name={user.username}
            img={user.avatar_url}
            size="small"
            link={user.html_url}
            items={true}
          />
        );
      })}
    </>
  );
};
export default function SubBoard({
  userData,
}: {
  userData: User;
}): React.ReactElement {
  const classes = useStyles();
  const { followers, following } = userData;
  return (
    <Grid container spacing={3} className={classes.container}>
      <HeadTitle name={"Following"} />
      {renderSubs(following)}
      <HeadTitle name={"Followers"} />
      {renderSubs(followers)}
    </Grid>
  );
}
