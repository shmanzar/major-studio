// Smithsonian API example code
// check full API documentation here: https://edan.si.edu/openaccess/apidocs/


// put your API key here;
const apiKey = "YZ7GP6NjkhYNhJDzyHaCv88g89m0Ip0lryIw36LZ";

// Access to individual objects by ID
const objectBaseURL = "https://api.si.edu/openaccess/api/v1.0/content/";

//fetches content based on id of an object.
function fetchContentDataById(id) {
  let url = objectBaseURL + id + "?api_key=" + apiKey;
  window
    .fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log("Here's the content data of the specified object:", data.response);
    })
    .catch(error => {
      console.log(error);
    })
}
// fetchContentDataById("edanmdm:NMAI_270941");
fetchContentDataById("edanmdm:nmaahc_2015.97.42");
