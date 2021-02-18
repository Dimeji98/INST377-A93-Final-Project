### Introduction and Information Problem

* At the University of Maryland, there are a very large number of classes and professors.
* This is difficult for students because they have a hard time deciding which classes to take.
* This also is difficult for university management because they have a hard time looking at all of the information for each class. 
* There is already PlanetTerp, a website that does offer in the average grades for the courses taught by professors. 
* But PlanetTerp’s architecture is limited in its display of information and could use some renovation to better serve students. 
* To summarize, the information problem we are aiming to solve is the representation of classes and professor information as well as the absence of some information that would benefit students when they register for classes.
* We are hoping to use the PlanetTerp grade data API (https://api.planetterp.com/?javascript#planetterp-api) to retrieve the course and professor data and incorporate into a new revamped site with some newly added search features building on top of what PlanetTerp already has to offer. 
* We will implement a search feature that searches for either a course and the professors that teach it or a professor and the courses taught by that professor. 
* Users also will be able to filter the general list of courses by department, credits, and professors. 
* The strongest feature of concern, Average Grade, can be viewed and visualized from all the previously mentioned searches and filters.
* The Average grade can also be filtered to represent all semesters or solely the semesters from the previous academic calendar year. 
* We hope that in the end, our service will benefit students that are looking for classes to take and faculty that want easier access to information about university classes.


### Developers Manual:

### Installations:
* Clone this repository into Github desktop using the large grreen Code button. 
* Open it using the "open this repository in VSCode" button within Githu Desktop.
* Once in VSCode, open up a new terminal window by going to the Terminal Option and selecting New Terminal.
* Type `npm install` in that new window.
* After that is running, tyoe `npm instal --save node-fetch` as this will allow you to get external data into the server.js file.
* In server.js make sure  `import express from 'express';`, `import dotenv from 'dotenv';`, and `import fetch from "node-fetch";` at the top of the file to be able to use the api and do all the functionality in the backend.
* If those are not there, then add them.
* You are all set for installions for the application.

### How to run the application on the server:
* Now everytime you save and you want to immediately check. Follow these directions 
* Open up a new terminal.
* Type `npm start` in the terminal window and make sure everything is running smoothly by opening up `localhost:3000`.
* You're all set to run the application on the server. This is also a good alternative if Heroku or any other cloud is not acting right.

### How to run tests that have been written or will be in the future:
* Once again open up a new terminal.
* Now go back to the Terminal option and select Split Terminal.
* In one window type `npm start` and that should bring up the localhost:3000 again which is a good sign it is running correctly.
* In the otherr window type `npm test` and it should open a cypress page which will automatically run the testd written and alert you to any problems
* You arre set to run tests now!


### API for server application:
* We are using the planet.io API.
* Going to thee server.js file we can start their to explain the API
* The `.post` request allows to see if the POST request is detected which is good 
* We then created a list of departments that goes by course i.e., `AASP`,`AMSC`, etc.
* We then looped through all the departments and fetched their course data with `GET` in the for loop.
* The API will return the requested data points in our professorData variable
* We then used the `Promise.`function a JSON object from each of the responses
* From there we logged the data onto the console and we checked for errors, if there was an error we logged it.

### Expectations around bugs and road-map for future development:
* The only known bug for the application right now is that the API only returns a max of 1000 data points. 
* That bug caused us to miss several courses that way.
* For future development we would work more with the scripts.js file to make the UI more stylish
* We would also need to either improve the API or change it to return mor data points as well as more information about grades.
* Lastly, we would want to add recent professor reviews as well and include that in both the backend and front-end future development.
