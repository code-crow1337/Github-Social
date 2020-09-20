import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Repo } from "../../types";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight:'100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
  },
  spacing: {
    justifyContent: "space-around",
  },
  title: {
    fontSize: 14,
  },
  language: {
    color: "#318150",
  },
});

export default function GitCard({ repoInfo }: { repoInfo: Repo }) {
  const {
    name,
    url,
    description,
    languages,
    clone_url,
  } = repoInfo;
  const classes = useStyles();

  const renderLanguage = (languages: any): any => {
    return Object.keys(languages).map((language: string) => (
      <Typography
        key={language}
        variant="subtitle1"
        component="span"
        className={classes.language}
      >
        {`${language} `}
      </Typography>
    ));
  };
  return (
      <Grid item xs={12} sm={6} md={4}>
        <Card
          variant="outlined"
          className={classes.root}
          key={`${name}`}
        >
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {name}
            </Typography>
            <Typography variant="body2" component="p">
              {description}
            </Typography>
            <Box m={1}>{renderLanguage(languages)}</Box>
          </CardContent>
          <CardActions className={classes.spacing}>
            <Button size="medium" href={url}>
              <FontAwesomeIcon size="3x" icon={faGithub} />
              <Typography variant="caption">Go to Repo</Typography>
            </Button>
            <Button size="medium" href={clone_url}>
              <FontAwesomeIcon size="3x" icon={faCodeBranch} />
              <Typography variant="caption">Git Clone</Typography>
            </Button>
          </CardActions>
        </Card>
      </Grid>

  );
}
