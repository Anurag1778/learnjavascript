const button = document.getElementById("search-button");
const input = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");
async function getData(cityName) {
  let result = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=b5d39c802681480798102814240604&q=${cityName}&aqi=yes`
  );
  return await result.json();
}

button.addEventListener("click", async () => {
  const value = input.value;
  let data = await getData(value);
  cityName.innerHTML = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
  cityTime.innerHTML = `The Date Time is ${data.location.localtime}`;
  cityTemp.innerHTML = `Temperature ${data.current.temp_c} degree calcius`;
});

// http://api.weatherapi.com/v1/current.json?key=b5d39c802681480798102814240604&q=London&aqi=yes
