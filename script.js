var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=aff78ae754913602b3292cde613baf15')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  tempValue=Number(tempValue)-273.15;
  tempValue=tempValue.toFixed(2);
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
document.querySelector('.card').style.backgroundColor="#e7e7e7";
  main.innerHTML = "City - "+ nameValue;
  desc.innerHTML = "Description - "+descValue;
  temp.innerHTML = "Temperature - "+tempValue+" (celsius)";
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})
