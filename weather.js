var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');

button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=60b9236f1143b343a7c88b85319da931')
.then(response => response.json())
.then(data => {

var nameValue = data['name'];
var descValue = data['weather'][0]['description'];
var tempValue = data['main']['temp'];



name.innerHTML = nameValue;
desc.innerHTML = descValue;
temp.innerHTML = tempValue;

})
.catch(err => alert('wrong city name'))
})
