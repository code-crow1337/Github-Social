import React, { useState, useEffect } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";

export default function SearchBar(): React.ReactElement {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentSearch, setcurrentSearch] = useState<string>(searchQuery);
  const [userData, setUserData] = useState<Array<number> | undefined>([]);

  useEffect(() => {
    const setValue = setTimeout(() => setSearchQuery(currentSearch), 1500);
    return () => {
      clearTimeout(setValue);
    };
  }, [currentSearch]);

/*   const getData = async () => {
    const response = await fetch("/api", {
      body: JSON.stringify(searchQuery),
    });
    const gitHubUserInfo = await response.json();
    console.log("Got the info", gitHubUserInfo);
    return gitHubUserInfo;
  };
 */
  useEffect(() => {
    console.log('searchquery triggered');
    const infoData = async () => {
      if(searchQuery === "") return; 
      const response = await fetch(`/api/search/${searchQuery}/`);
      const gitHubUserInfo = await response.json();
      
      setUserData(gitHubUserInfo);
    };
    infoData();
  }, [searchQuery]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    const {
      target: { value },
    } = event;
    setcurrentSearch(value);
  };
  console.log('Fronted I have recived information', userData);
  return (
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
  );
}
