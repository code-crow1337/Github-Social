import React from "react";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  container: {
    backgroundColor: fade("#fff", 0.7),
  },
});

export default function HeadTitle({ name }: { name: string }) {
  const classes = useStyles();
  return (
    <Grid className={classes.container} item xs={12} sm={12} md={12}>
      <Typography variant="h4" component="h4">
        {name}
      </Typography>
    </Grid>
  );
}
