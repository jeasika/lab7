$(document).ready(function() {

var animals = [ "dog" , "cat" , "rabbit" , "hamster" , "skunk" , "goldfish" , "bird" , "ferret" , "turtle" , "sugar glider" , "chinchilla" , "hedgehog" , "hermit crab" , "gerbil" , "pygmy goat" , "chicken" , "capybara" , "teacup pig" , "serval" , "salamander" , "frog" ];

function populateButtons(array){

  array.forEach(element =>{
    var a = $("<button>");
    a.text(element);
    a.addClass("animal-button");
    a.attr("data-type", element);
    $("#animal-buttons").append(a);
  } );
}

$("#animal-buttons").on("click", ".animal-button", function(){
  var type = $(this).attr("data-type");

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=aw1UG3AAh1ZJ1X3JWVxBxbo86RSC4gph&limit=10"; //FALTA MI API KEY

  $.ajax ({
    url: queryURL,
    method: "GET"
  })

  .then(function(response){
    //console.log(response);
    response.data.forEach(gif => {
      var animalDiv = $(`<div class='animal-item'>`);
      var rating = gif.rating;

      var p = $("<p>").text("Rating: "+ rating);

      var animated = gif.images.fixed_height.url;
      var still = gif.images.fixed_height_still.url;

      var animalImage = $("<img>");
      animalImage.attr("src", still);
      animalImage.attr("data-still", still);
      animalImage.attr("data-animate", animated);
      animalImage.attr("data-state", "still");
      animalImage.addClass("animal-image");

      animalDiv.append(p);
      animalDiv.append(animalImage);

      $("#animals").append(animalDiv);


    })
  })

})

populateButtons(animals);

});


//Identificar qué se repite constantemente y aplicarle una funcion.

//data-type: dice el nombre del animal.

