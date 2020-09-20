Coding test for a company. 
Requirements: Create an App or Web serive
Use Github's API (REST or Graphql)


## How to start the Application
1. ``` git clone https://github.com/code-crow1337/Github-Social.git``` in your terminal.
2. Do a ```npm install``` in ```/src``` directory as well ```/server``` directory.
3. Create an ```.env``` file in the  ```server``` directory
4. I choosed to authenticate with the Github Api with a so called  **Personal Token**  :
<br> Click on your profile to your right > ```Settings``` > ```Developer Settings``` > ```Personal Access Tokens``` > ```Genereate new token``` > Check for ```Repo``` >  Click on ```Genereate token```.
5. Copy your newly generated ```Access token``` into ```.env```
6. Your ```.env``` file should have these contents in it:  
```PORT={number} PERSONAL_TOKEN={your personal token}``` 
