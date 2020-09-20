Coding test for Futurice. 
Requirements: Create an App or Web serive
Use Github's API (REST or Graphql).

I first got the idea to search on a specifc user name to see their repositories. After looking through the documentation I saw the possiblity to make it more like a "social" app. The GitHub API gave the possibility to get info for a specific user who they are following and their followers. This is just a beginning face and has many possibilites. User authentication, chat, or reuse the backend for a mobile application. 

I took a litte bit longer then expected on this assignment cause of how a blast I was having of creating it. 

#### Screenshot of the home page
![GitHub User Info App](https://github.com/code-crow1337/Github-Social/blob/backEnd/github_user_info.png)
<br><br>
## How to start the Application
1. ``` git clone https://github.com/code-crow1337/Github-Social.git``` in your terminal.
2. Do a ```npm install``` in root of the project as well ```/server``` directory.
3. Create an ```.env``` file in the  ```server``` directory
4. I choosed to authenticate with the Github Api with a so called  **Personal Token**  :
<br> Click on your profile to your right > ```Settings``` > ```Developer Settings``` > ```Personal Access Tokens``` > ```Genereate new token``` > Check for ```Repo``` >  Click on ```Genereate token```.
5. Copy your newly generated ```Access token``` into ```.env```
6. Your ```.env``` file should have these contents in it:  
```PORT={number} PERSONAL_TOKEN={your personal token}``` 
7. To start the server do a  ```npm start``` in ```/server``` directory and  ```npm start``` in the root of the project .


### Possible implementations
1. Login via github to see your personal data right away
2. Using more of the Github API data to present and consume the information.
3. Navigation. 
4. Try to use the Graphql version of the Github API for learning puropses.  

### Needs to fix
1. Refactor code for more scalability as well readability. 
2. Some styling refactoring to make a more beutiful API.
