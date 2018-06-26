var topics = ['Prince', 'Sade', 'Bob Ross', 'Basquiat', 'Frida Kahlo'];
var gifURL;
var gifURL2;

function getGifs() {
    var APIKey = "&api_key=TRx57lf35WTrjAlswVtrLeVu8VBLZa9e";

    var gifs = $(this).attr("gif-inpt");


    // var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=TRx57lf35WTrjAlswVtrLeVu8VBLZa9e&q=unicorns&limit=30&offset=0&rating=G&lang=en"
    //https://api.giphy.com/v1/gifs/search?api_key=TRx57lf35WTrjAlswVtrLeVu8VBLZa9e&q=unicorns&limit=30

    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gifs + "&limit=10" + APIKey;


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        for (var i = 0; i < response.data.length; i++) {

            var gifDiv = $("<div class='gifs'>");            

            gifURL2 = response.data[i].images.original.url;
            gifURL = response.data[i].images.original_still.url;

            var gifImage = $("<img>").attr("src", gifURL);

            gifImage.attr("data-still", gifURL);
            gifImage.attr("data-animate", gifURL2);
            gifImage.attr("data-state", "still");
            gifImage.addClass("img");

            gifDiv.append(gifImage);

            var rating = response.data[i].rating;
            console.log(response.data);
            var divRating = $("<p>").text("Rating: " + rating);
            gifDiv.append(divRating);

            $("#gif-images").prepend(gifDiv);           
        }
    });
}

$(document).on("click", ".img", function () {
    var state = $(this).attr("data-state");
    if (state == "still") {
        $(this).attr("src", $(this).data("animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).data("still"));
        $(this).attr("data-state", "still");
    }
})

function displayGifs() {
    $("#gif-buttons").empty();

    for (var i = 0; i < topics.length; i++) {

        var newBtn = $("<button>");
        newBtn.addClass("gif-btn");
        newBtn.addClass("btn btn-secondary");
        newBtn.attr("gif-inpt", topics[i]);
        newBtn.text(topics[i]);

        $("#gif-buttons").append(newBtn);

    }
}

$("#add-giphy").on("click", function (event) {
    event.preventDefault();

    var gif = $("#giphy-input").val().trim();
    topics.push(gif);

    // console.log(gif);
    displayGifs();
})

$(document).on("click", ".gif-btn", getGifs);

displayGifs();