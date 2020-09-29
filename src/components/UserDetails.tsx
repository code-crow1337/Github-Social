import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const useStyles = makeStyles({
  large: {
    borderRadius: 232,
    maxHeight: "32vh",
    marginBottom: 16,
  },
  small: {
    borderRadius: 172,
    maxHeight: "16vh",
    marginBottom: 16,
  },
  label: {
    display: "inline-block",
  },
  focus: {
    backgroundColor: "#318150",
    color: "#fff",
  },
});

export default function UserDetails({
  name,
  img,
  size,
  link,
  items,
}: {
  name?: string;
  img: string;
  size: string;
  link: string;
  items?: boolean | undefined;
}) {
  const classes = useStyles();
  const sizeImg = size === "large" ? classes.large : classes.small;
  const sizeFont = size === "large" ? "h4" : "h5";

  //TODO conditional wrapper instead of repeating the same code.
  const RenderDetails = () => {
    return items ? (
      <Grid item xs={12} md={6} lg={3}>
        <Button
          href={link}
          color="primary"
          className={classes.label}
          focusVisibleClassName={classes.focus}
        >
          <img src={img} alt={`User ${name}`} className={sizeImg} />
          <Typography variant={sizeFont} component={sizeFont}>
            {name}
          </Typography>
        </Button>
        <Box m={2}>
          <Button size="small" href={link}>
            <FontAwesomeIcon size="3x" icon={faGithub} />
            <Typography variant="caption">Go to Repo</Typography>
          </Button>
        </Box>
      </Grid>
    ) : (
      <Grid item>
        <Button
          href={link}
          color="primary"
          className={classes.label}
          focusVisibleClassName={classes.focus}
        >
          <img src={img} alt={`User ${name}`} className={sizeImg} />
          <Box m={2}>
            <Typography variant={sizeFont} component={sizeFont}>
              {name}
            </Typography>
          </Box>
        </Button>
      </Grid>
    );
  };

  return (
    <>
      <RenderDetails />
    </>
  );
}
