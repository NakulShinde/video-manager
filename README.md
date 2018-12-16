### Video Manager (v0.0.1)

FontEnd tech stack used
- React
- React-route-dom


Installation steps
- Clone this repository
- goto 'video-manager' folder
- #npm install
- #npm start
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- Below API setup is must to run full application 

API Setup (used [https://www.npmjs.com/package/json-server](json-server) npm package) :
- Goto 'video-manager' folder
- #npm install -g json-server 
- #json-server --watch .\public\db.json --port 3004
- This is for winodws machine 
(For others machine goto 'public' folder and try #json-server --watch db.json --post 3004)
- This should create REST API's from . as,

  Resources
  http://localhost:3004/movie-categories
  http://localhost:3004/movie-authors


Run test
- #npm test

Run test coverage
- #npm test -- --coverage

Production Build
- #npm run build
- Production build is created in `build` folder and ready to deploy

