
async function getDatafromserver()
{

        return fetch('/api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
        })
          .then((fromServer) => fromServer.json())
          .then((jsonFromServer) => jsonFromServer)
          .catch((err) => {
            console.log(err);
          });
}



async function mainThread()
{
  const rawdata = await getDatafromserver();
  // put all the courses in one array for searching. This is not efficient, using a map to map
  // departments to courses would be ideal.
  let classes = [];
  for(let i = 0; i < rawdata.length - 2; i++){classes = classes.concat(rawdata[i]);}

  // prof data is the last ement of the returned array.
  const teachers= rawdata[rawdata.length - 1];
  console.log("Rawdata from server, ", rawdata.length);
  console.log(rawdata);
  console.log("classes", classes);
  console.log("teachers", teachers);
  
  
  const textInput = document.querySelector("#textInput");
  const suggestions = document.querySelector(".suggestions");
  if (textInput !== null) {
    console.log("I am here");
    
  textInput.addEventListener("change", (evt) => {
    var typesearch = document.getElementById("textInput").getAttribute("placeholder");
        
    if(document.getElementById('course_search').checked)
    {
      displayCoursesMatches(evt, classes);
      console.log(typesearch);
      console.log("I am here 2");
    }
    
    if(document.getElementById('professor_search').checked)
    {
      displayProfessorsMatches(evt, teachers); 
    }

  })
}
}

mainThread().catch(err => {console.error(err)});


function displayCoursesMatches(evt, data_to_search)
{
  console.log("I am here 3");
  const suggestions = document.querySelector(".suggestions");
  const value = evt.target.value;
  console.log(value);  
  const matchSearch = filterFunctionCourses(value, data_to_search);
  console.log(matchSearch);
  let html;
  //const matchProfessors = findMatches(value, teachers);

  if (matchSearch.length != 0) {
    html = matchSearch.map(course => { 
     return `
      <li>
      <h4 class= "courses">${course.department}${course.course_number}</h4>
      <p class="ClassTitle">Title: ${course.title}</p>
      <p class="category">Credits: ${course.credits}</p>
      </li>
      `;
      
    }).join("");
  }
  else {
    html = `
      <li>
          <h4 class="name">No results found</h4>
          <p class="category">Check your search</p>
      </li>
      `;
  }

  suggestions.innerHTML = html;

//Code to create new popup window when clicked
var more = document.getElementsByClassName("courses");
for (let i = 0; i < more.length; i++) {
  more[i].onclick = function(e) {
    const newpage = document.querySelector(".newpage");
    mo=more[i].innerHTML;
    var z = mo.match(/[\d\.]+|\D+/g);
    console.log(z[1]);
    var result = data_to_search.filter((SelectedCourse)=>(SelectedCourse.course_number == z[1]) && (SelectedCourse.department == z[0]));
    const newhtml = result.map(course => { 
      console.log(result);
      
     return `
     <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" type="text/css" href="styles.css" />
   <title>Group A93 Final Project</title>
   </head>
     <body>
     <div class= "de">
     <li>
       <h4>${course.department}${course.course_number}</h4>
       <p class="category">${course.title}</p>
       <p class="category">${course.credits}</p>
       <p class="category">${course.department}</p>
       <p class="category">${course.professors}</p>
     </li>
      </div>
       </body>`; 
      
    }).join('');
    newpage.innerHTML=newhtml;
   
  }
}
}

function displayProfessorsMatches(evt, data_to_search)
{
  console.log("I am here 3");
  const suggestions = document.querySelector(".suggestions");
  const value = evt.target.value;
  console.log(value);
  const matchSearch = filterFunctionProfessors(value, data_to_search);
  console.log(matchSearch);
  let html;
  //const matchProfessors = findMatches(value, teachers);

  if (matchSearch.length != 0) {
    html = matchSearch.map(prof => { 
     return `
      <li>
      <h4 class= "profs">${prof.name}</h4>
      <p class="category">Other name: ${prof.slug}</p>
      </li>
      `;
    }).join("");
  }
  else {
    html = `
      <li>
          <h4 class="name">No results found</h4>
          <p class="category">Check your search</p>
      </li>
      `;
    }

  suggestions.innerHTML = html;
  
  
  //Code to create new popup window when clicked
var more = document.getElementsByClassName("profs");
for (let i = 0; i < more.length; i++) {
  more[i].onclick = function(e) {
    const newpage = document.querySelector(".newpage");
    mo=more[i].innerHTML;
    var result = data_to_search.filter((person)=>(person.name == mo));
    const newhtml = result.map(prof => { 
      console.log(result);
      
     return `
     <head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" type="text/css" href="styles.css" />
   <title>Group A93 Final Project</title>
   </head>
     <body>
     <div class= "de">
     <li>
       <h4>${prof.name}</h4>
       <p class="category">${prof.courses}</p>
     </li>
      </div>
       </body>`; 
      
    }).join('');
    newpage.innerHTML=newhtml;
   
  }
}
  
}




function filterFunctionProfessors(string, teachers)
{
  return teachers.filter(f => {
    const regex = new RegExp(string, "gi"); // g means global and i means insensitive
    
    return f.name.match(regex)
    
  })
}

function filterFunctionCourses(string, courses)
{
  return courses.filter(f => {
    const regex = new RegExp(string, "gi"); // g means global and i means insensitive
    
    const tomatch = f.department + f.course_number;
    console.log(tomatch);
    return tomatch.match(regex)
  })
}

