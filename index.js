// Remove Empty Fields from JSON
// JSON is one of the most widely used format to exchange data between a browser and a server.
// Wyng has a signup page for new users to create an account. Once a user enters all required
// fields and clicks the “SAVE” button, his/her personal information will be sent to a RESTFul API
// endpoint in JSON. When the server receives the data in JSON, it needs to remove all the
// fields with an empty value​, before saving it to database.
// Please write a function that can remove all fields with an empty value, from any JSON input.
// The solution must be reusable for processing any kind of JSON input, e.g., the JSON field
// structure and names may change in the future.
// Following values are considered as empty​:
// ● null
// ● Empty array []
// ● Empty object {}
// ● Empty string, such as ""​ or " "

const removeEmptyFields = (obj) => {
  for (let i in obj) {
    if (obj[i] instanceof Object){ // If this item is an Object instance continue checking recursively
      removeEmptyFields(obj[i])
    }
    if ( 
      (obj[i] && obj[i].length <= 1) || // Check if an empty object array
      (obj[i] && Object.keys(obj[i]).length === 0) || // Check if an empty object
      (obj[i] ===  ''|| obj[i] === null) // Check if empty string or null
      ) { 
        console.log('deleting:', obj[i]) // Log out what is being removed
        delete obj[i]
      }
    }
  return obj
}