$(document).ready(function(){
   // alert("ali ali")

   $("#inputValue").on("keyup",function(e){
      let cityname = e.target.value;
      const ApiKey = 'b8b14a5b15faf654c9d48879c78a2ae4';
   

   $.ajax({

  url : `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${ApiKey}&units=metric`,    
}).done(function(weatherdata){
//console.log(weatherdata);

$("#profile").html(`
<div class="row">

<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Weather : ${weatherdata.weather[0].description}</h5>
    <p class="card-text">The Temperature At CityName : <b> ${weatherdata.name} </b> And Temperature Is <b> ${weatherdata.main.temp}&#8451 And Its Feels Like ${weatherdata.main.feels_like}&#8451 </b> </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>

 </div>
`)

});

})

})
//http://api.openweathermap.org/data/2.5/weather?q=karachi&appid=b8b14a5b15faf654c9d48879c78a2ae4

// make a request to the server

