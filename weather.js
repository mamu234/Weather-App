var button = document.querySelector('.button')//grab the value for the button from the DOM
var inputValue = document.querySelector('.inputValue')//grab the input value
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var hum = document.querySelector('.humidity');

button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=60b9236f1143b343a7c88b85319da931&units=metric')
.then(response => response.json())// Using two prmoses then where we get a response using json format //
.then(data => {//The second promise is for geting data form the API//

var nameValue = data['name']; //data comes from the API
var descValue = data['weather'][0]['description'];
var tempValue = data['main']['temp'];
var humValue = data ['main']['humidity'];



name.innerHTML = nameValue;
desc.innerHTML = descValue;
temp.innerHTML = tempValue;
hum.innerHTML =humValue;
})
.catch(err => alert('wrong city name'))
})
// we use the function catch to look for any errors and alert the user 