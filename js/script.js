$(document).ready(function() {

  // Functions
  function switchBackground(){
  event.preventDefault(); //You only need to use this for html elements that have default action such as an 'a' tag if a user clicks this it navigats to the href (aka website)

  //to run this function, these varibles will happen before it makes a decision.
  var city = $('#city-type').val().toLowerCase().replace(/\s+/g, ''); // .Val() Takes the content which you inut or .Val('Sydney') Would set an input of the word Sydney to appear
  console.log(city);
  // var lowerCity = city.toLowerCase(); // This sets everything to lowercase i.e. you might NYC and it will still read nyc

  // var noSpaceCity = lowerCity.replace(/\s+/g, ''); // This is called a regular expression, Your finding combinations of text in a string i.e input and setting it to no space
  // When a user types in a city in the field, the "city-type" will need to apply that city's class//

   if ((city == "nyc") || (city == "newyorkcity") || (city == "newyork")){
    $("body").attr('class', ''); // this resets your body to have no classes, it wont work if dont do this as it can't have more than one class
    $("body").addClass("nyc");
  }

   else if ((city == "sf") || (city == "sanfrancisco") || (city == "bayarea")){
     $("body").attr('class', '');
     $("body").addClass("sf");
   }

   else if ((city == "la") || (city == "losangeles") || (city == "lax")){
     $("body").attr('class', '');
     $("body").addClass("la");
   }

   else if ((city == "atx") || (city == "austin")){
     $("body").attr('class', '');
     $("body").addClass("atx");
   }

   else if ((city == "syd") || (city == "sydney") || (city == "bestcityintheworld")){
   $("body").attr('class', '');
   $("body").addClass("syd");
   }


  // Clear entry for new city value
   $('#city-type').val('');
  }

  // Event binding
  // When a user clicks on update "button" , the "background" will change to a picture of the city entered

  $("#submit-btn").on("click", switchBackground);

  })
