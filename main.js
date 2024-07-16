document.addEventListener("DOMContentLoaded", () => {
    // console.log("loaded");
    document.querySelector("#weather-form").addEventListener("submit", (e) => {
        e.preventDefault();
    })
    document.querySelector("#curr-location").addEventListener("click", () => {
        // -- Get Current Location -- //
        function getLocation () {
            navigator.geolocation ? navigator.geolocation.getCurrentPosition(showPosition, showError) : console.log("error getting location")
        }

        // -- Show positions coordinates -- //
        function showPosition(position) {
            fetchData(position.coords.latitude, position.coords.longitude);
        }

        // -- Handle Errors -- //
        function showError () {
            console.log("Error")
        }
        getLocation();
    });
});

function fetchData (lat, lon) {
    const url = `http://api.weatherapi.com/v1/current.json?key=58ecff395d5346adb6f163402241607&q=${lat},${lon}`
    fetch(url)
                .then(response => response.json())
                .then(data => {
                    const { condition } = data.current
                    const { temp_f } = data.current
                    const { name } = data.location
                    populateDom(condition.text, temp_f, name)
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                });
}

function populateDom(condition, temp, name) {
    document.querySelector("#condition").innerHTML = condition
    document.querySelector("#temp").innerHTML = temp
    document.querySelector("#location").innerHTML = name

    let weatherImg;
    // case

    if (condition == "Clear") {

    } else if (condition == "Clear") {

    } else if (condition == "Clear") {

    } else {

    }
}

//https://www.weatherapi.com/docs/