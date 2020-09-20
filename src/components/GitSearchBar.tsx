import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function SearchBar({
  dispatch,
}: {
  dispatch: any;
}): React.ReactElement {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentSearch, setcurrentSearch] = useState<string>(searchQuery);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const setValue = setTimeout(() => setSearchQuery(currentSearch), 1500);
    return () => {
      clearTimeout(setValue);
    };
  }, [currentSearch]);

  useEffect(() => {
    const infoData = async () => {
      if (searchQuery === "") return;
      setIsLoading(true);
      const response = await fetch(`/api/search/${searchQuery}/`);
      const gitHubUserInfo = await response.json();
      dispatch({ type: "updateState", payload: gitHubUserInfo });
      setIsLoading(false);
    };
    infoData();
  }, [searchQuery, dispatch]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    const {
      target: { value },
    } = event;
    setcurrentSearch(value);
  };

  return (
    <>
      <Box component="div">
        <form noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="GitHub Usersname"
            variant="outlined"
            value={currentSearch}
            onChange={handleChange}
          />
        </form>
      </Box>
      <Box>
        {isLoading ? (
          <Box m={8}>
            <CircularProgress />
          </Box>
        ) : (
          ""
        )}
      </Box>
    </>
  );
}
