//apikey
var APIKey = "TRx57lf35WTrjAlswVtrLeVu8VBLZa9e";
//URL for Giphy API
//var queryURL = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=TRx57lf35WTrjAlswVtrLeVu8VBLZa9e&limit=30";
var queryURL = "http://api.giphy.com/v1/gifs/search?" + APIKey + "limit=30";


$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);



  var myGifs = response.data

  foreach myGifs (

  )

  $('.inner')append('<img src=')
});
