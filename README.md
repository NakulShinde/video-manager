### Video Manager (v0.0.1)

FontEnd tech stack used
- React
- React-router-dom
- React-redux
- Redux-thunk
- CSS-Modules
- json-server for mock API's
- Jest & Enzyme for unit testing and snapshot testing


Installation steps
- Clone this repository
- goto 'video-manager' folder
- #npm install
- #npm start
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- Below API setup is must to run full application 

API Setup (used [https://www.npmjs.com/package/json-server](https://www.npmjs.com/package/json-server) npm package) :
- Goto 'video-manager' folder
- #npm install -g json-server 
- Goto 'public' folder 
- #json-server --watch db.json --port 3004
- This should create REST API's as below,

  Resources
  - [http://localhost:3004/movie-categories](http://localhost:3004/movie-categories)
  - [http://localhost:3004/movie-authors](http://localhost:3004/movie-authors)

Run test (Unit testing is in progress)
- #npm test

Run test coverage (Unit testing is in progress)
- #npm test -- --coverage

Production Build
- #npm run build
- Production build is created in `build` folder and ready to deploy


# App Screen-Shots

1]

![image](https://user-images.githubusercontent.com/3436316/50058088-86850780-0199-11e9-9da8-6570e9eb3d70.png)

2]

![image](https://user-images.githubusercontent.com/3436316/50058095-9d2b5e80-0199-11e9-9df3-fe28b1c46d5e.png)


3]

![image](https://user-images.githubusercontent.com/3436316/50058124-07dc9a00-019a-11e9-963b-e7b10f4ed84e.png)


4]

![image](https://user-images.githubusercontent.com/3436316/50058101-c350fe80-0199-11e9-96e0-1eda3965e343.png)
