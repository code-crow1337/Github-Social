import React, { useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Grid from "@material-ui/core/Grid";
import Searchbar from "./GitSearchBar";
import RepoBoard from "./RepoBoard";
import UserDetails from "./UserDetails";
import SubBoard from "./SubBoard";
import HeadTitle from "./HeadTitle";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  container: {
    backgroundColor: fade("#fff", 0.7),
  },
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
  console.log(state);

  const renderUserInfo = () => {
    const {
      userData: { userInfo },
      userData,
    } = state;

    return (
      <>
        <UserDetails
          name={userInfo.login}
          img={userInfo.avatar_url}
          link={userInfo.html_url}
          size="large"
          items={false}
        />
        <RepoBoard userData={userData} />
        <SubBoard userData={userInfo} />
      </>
    );
  };
  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={12}>
        <Box m={3}>
          <HeadTitle name="Github Users Information" />
        </Box>
        <Box m={3}>
          <Searchbar dispatch={dispatch} />
        </Box>
        {state.userData ? renderUserInfo() : ""}
      </Grid>
    </Grid>
  );
}

export default GitAppBoard;
