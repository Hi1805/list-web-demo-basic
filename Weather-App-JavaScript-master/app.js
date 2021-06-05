const notification = document.querySelector(".notification");
const icon = document.querySelector(".weather-icon");
const tempValue = document.querySelector(".temperature-value p");
const tempDescription = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const timer = document.querySelector(".timer >p");
const select = document.getElementById("city");
const search = document.getElementById("search");
const now = document.getElementById("now");
const player = document.getElementById("player");
weather = {};
weather.temperature = {
  // mặc định ban đầu cho nó là độ C
  unit: "celsius",
};

Date.prototype.timeNow = function () {
  return (
    (this.getHours() < 10 ? "0" : "") +
    this.getHours() +
    ":" +
    (this.getMinutes() < 10 ? "0" : "") +
    this.getMinutes() +
    ":" +
    (this.getSeconds() < 10 ? "0" : "") +
    this.getSeconds()
  );
};

Date.prototype.today = function () {
  return (
    (this.getDate() < 10 ? "0" : "") +
    this.getDate() +
    "/" +
    (this.getMonth() + 1 < 10 ? "0" : "") +
    (this.getMonth() + 1) +
    "/" +
    this.getFullYear()
  );
};
// APP CONSTS AND VARS
const KELVIN = 273;
// API KEY
const key = "0ebf0e29926cc939f557a936228e1129";
// /console.log("navigator" + navigator.geolocation);
// CHECK IF BROWSER SUPPORTS GEOLOCATION
function start(setPosition) {
  if (navigator.geolocation) {
    // kiem tra xem Geolocation
    navigator.geolocation.getCurrentPosition(setPosition, showError);
  } else {
    notification.style.display = "block"; //
    notification.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
  }
}
start(setPosition);
//Truyền vĩ độ, kinh độ
function setPosition(position) {
  // vi tri dia ly
  let latitude = position.coords.latitude; //lay vi do
  let longitude = position.coords.longitude; // lay kinh do
  getWeather(latitude, longitude); // bỏ vị trí tung độ và kinh độ bỏ vào API để lấy thời tiêt ở vị trí đó
}

// Khi không lấy được vị trí
function showError(error) {
  // error nay chinh la GeolocationPositionError
  // message nam trong  GeolocationPositionError
  notification.style.display = "block";
  notification.innerHTML = `<p> ${error.message} </p>`;
}
let check = true;
// GET WEATHER FROM API PROVIDER
function getWeather(latitude, longitude) {
  console.log(latitude, longitude);
  // getweather
  let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
  fetch(api)
    .then((res) => {
      console.log(typeof res); // may chu se phan hoi  , cho ban 1 doi tuong,
      //  console.log(res.json()); 1 doi tuong promise, chú ý : res.json(); chỉ được phép gọi 1 lần nên người ta thường gán
      let data = res.json();
      data.then((x) => console.log(x));
      return data;
    })
    .then(function (data) {
      //  console.log(data);

      //data.weather là 1 mảng và nó có độ dài là 1
      weather.temperature.value = Math.floor(data.main.temp - KELVIN); // lấy độ C
      weather.description = data.weather[0].description; // Trạng thái ví như nhiều mây  , nắng bla bla
      weather.iconId = data.weather[0].icon; // icon co san roi :v
      if (check) {
        // weather.fullLocation = `${(weather.city =
        //   data.name)},${(weather.country = data.sys.country)}`;
        // thanh pho
        // đất nước
      }
      // console.log( weather.fullLocation);
      //return data;
    })
    .then(function (x) {
      console.log(x);
      displayWeather();
    })
    .catch(() => {
      alert("Link not Found");
    });

  let apiGetAddress = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=4579ab5542494e03b5530619cf1a83eb`;
  fetch(apiGetAddress)
    .then((res) => {
      let data = res.json();
      return data;
    })
    .then((data) => {
      const city = data.results[0].components.city;
      const cityDis = data.results[0].components.city_district;
      weather.fullLocation = `${(weather.city = city)},${(weather.country = cityDis)}`;
    })
    .then(() => {
      displayWeather();
    });
}
//Xuất Ra màn hình kết quả
function displayWeather() {
  console.log(weather.iconId);
  icon.innerHTML = `<img src="./icons/${weather.iconId}.png"/>`;
  tempValue.innerHTML = `${weather.temperature.value}°<span>C</span>`;
  tempDescription.innerHTML = weather.description;
  locationElement.innerHTML = `${weather.fullLocation}`;

  setInterval(() => {
    const date = new Date();
    timer.innerHTML = `<p>${date.timeNow()}<br> ${date.today()}</p> `;
  });
}

function celsiusToFahrenheit(temperature) {
  // chuyen do C sang do F
  return (temperature * 9) / 5 + 32;
}

// Khi kick chuột vào ở nhiệt độ
tempValue.addEventListener("click", function () {
  if (!weather.temperature.value)
    // neu khong co do C thi k chay
    return;
  if (weather.temperature.unit == "celsius") {
    // lúc đúng là đúng thì ở phía trên đã gán giá trị
    let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
    fahrenheit = Math.floor(fahrenheit);
    tempValue.innerHTML = `${fahrenheit}°<span>F</span>`;
    weather.temperature.unit = "fahrenheit";
  } else {
    tempValue.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    weather.temperature.unit = "celsius";
  }
});

function getLocation(name) {
  // lay dia chi nhap vao
  let url = `https://api.opencagedata.com/geocode/v1/json?q=${name}+Viet+Nam&key=4579ab5542494e03b5530619cf1a83eb`;
  fetch(url)
    .then((r) => r.json())
    .then((data) => {
      let latitude = data.results[0].geometry.lat;
      let longitude = data.results[0].geometry.lng;
      check = false;
      getWeather(latitude, longitude);
      weather.fullLocation = data.results[0].formatted;
    })
    .catch(() => {
      alert("City Not Found");
    });
}
function getValue() {
  let name = select.value.trim();
  name = name.replace(" ", "+");
  getLocation(name);
  select.value = "";
}
document.addEventListener("keyup", () => {
  if (event.keyCode == 13) {
    if (!select.value) alert("Please Enter City");
    else {
      getValue();
    }
  }
});
console.log("Da chay");
search.addEventListener("click", () => {
  if (!select.value) {
    alert("Please Enter City");
  } else {
    getValue();
  }
});
now.addEventListener("click", function () {
  check = true;
  start(setPosition);
});
