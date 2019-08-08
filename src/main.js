const btnChrngv = document.getElementById('btn-chernigiv');
const btnKv = document.getElementById('btn-kyyiv');
const btnVlns = document.getElementById('btn-vilnius');
const cityName = document.querySelector('.city-name');
const temperature = document.querySelector('.city-temperature');
const humidity = document.querySelector('.humidity');
const atmPresure = document.querySelector('.atm-presure');
const windSpeed = document.querySelector('.wind-speed');
const windDirection = document.querySelector('.wind-direction');
const icon = document.querySelector('.icon');
const btns = document.querySelectorAll('.btn')

const loadData = (e) => {
  let townId
  if(e.type === 'load') {
    let  defaultMean = document.querySelector('.activebtn')
    townId = defaultMean.getAttribute('data-id')
  } else {
    townId = e.target.getAttribute('data-id');
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?id=${townId}&units=metric&appid=237d46de088807b8ea4371af72fb7dbd`)
  .then(res => res.json())
  .then(data => {
    let url = data.weather[0].icon
    cityName.innerHTML = data.name;
    temperature.innerHTML = data.main.temp
    humidity.innerHTML = data.main.humidity
    atmPresure.innerHTML = data.main.pressure
    windSpeed.innerHTML = data.wind.speed
    windDirection.innerHTML = data.wind.deg
    icon.innerHTML =`<img src="https://openweathermap.org/img/wn/${url}@2x.png" alt="" srcset="" width="30px" height="30px"/>`
  })
  .catch(err => console.log(err))

    if (e.type === 'click'){
    btns.forEach( elem => {
      if(elem.className === "btn activebtn") {
      elem.classList.remove("activebtn")
      }
    })
    e.target.classList.add('activebtn')
  }
}

btnChrngv.addEventListener('click', loadData)
btnKv.addEventListener('click', loadData)
btnVlns.addEventListener('click', loadData)
window.onload = loadData
