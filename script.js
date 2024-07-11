const button = document.getElementById("search-button");
const input = document.getElementById("city-id");

const cityName = document.getElementById("cityname");
const localTime = document.getElementById("localtime");
const temp = document.getElementById("temp_c");
async  function getdata(cityname){

      const  promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key={use your api key}&q=${cityname}&aqi=yes`
      );

      return await promise.json();
}
button.addEventListener("click", async () => {
    console.log(input.value);
    const value = input.value;
    const result = await getdata(value);
    console.log(result);
    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
    localTime.innerText = `${result.location.localtime}`;
    temp.innerText = `${result.current.temp_c}`;

});
