import React from "react";
import Typography from "@material-ui/core/Typography";

export default function RepoHead({ name }: { name: string }) {
  return (
    <div>
      <Typography variant="h4" component="h4">
        {name} Repositories
      </Typography>
    </div>
  );
}
