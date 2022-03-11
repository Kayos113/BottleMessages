const axios = require("axios");

exports.getRandomMessage = function() {
  let message;
  axios({
    method: 'get',
    url: 'https://bottle-backend-api.herokuapp.com',
    responseType: 'json'
  })
  .then(function (response) {
    console.log("RESPONSE:");
    console.log(response);
    message = response.data.message;
  })
  .catch( err => {
    console.log(err);
    message = "Oops. Wrong Bottle."
  })
  .then( () => {
    console.log(message);
    return message;
  });
}
