


let form=document.querySelector(".search-form");
form.addEventListener("submit",search);

function search(event){
  event.preventDefault();

  

 let city=document.querySelector("h1#city");
  let text = document.querySelector("#form-control");
  
  
  
 
if(text.value){
  city.innerHTML = `${text.value}`;

  
  
  }

  if (text.value) {
  
let apiKey = "5ef4de8cd6b7fefcd7c42f98cf464ce8";
 let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${text.value}&units=metric`;




axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);


  function showTemperature(response) {
  
  

  console.log(response.data);


  let temperature = Math.round(response.data.main.temp);
  
  console.log(temperature);

  let currentTemperature = document.querySelector("#temperature");
  currentTemperature.innerHTML = temperature;
  

  
  let description = document.querySelector("#description");
    description.innerHTML = response.data.weather[0].description;
  
}

  }
  
  
  navigator.geolocation.getCurrentPosition(showPosition);


  
  
}

function showPosition(position) {
  console.log(position);

  let getPosition = document.querySelector("#position");
  getPosition.innerHTML = `lat: ${position.coords.latitude}  &  lon: ${position.coords.longitude}`;



}




// let apiKey = "5ef4de8cd6b7fefcd7c42f98cf464ce8";
//  let apiUrl="https://api.openweathermap.org/data/2.5/weather?q=city&units=metric";




// axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

// function showTemperature(response) {
  
  

//   console.log(response.data);


//   let temperature = Math.round(response.data.main.temp);
  
//   console.log(temperature);

//   let currentTemperature = document.querySelector("#temperature");
//   currentTemperature.innerHTML = temperature;
  

  
  
  

// }


