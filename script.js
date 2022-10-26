function loadcoupon() {
    document.getElementById('coupon').style.visibility = "visible";
    document.getElementById('main').style.opacity = '0.7'
    document.getElementById('navbar').style.opacity = '0.7'

}
function closecoupon() {
    document.getElementById('coupon').style.visibility = "hidden";
    document.getElementById('main').style.opacity = '1'
    document.getElementById('navbar').style.opacity = '1'
}
function darkmode(){
    let darker=document.body
    darker.classList.toggle('darkmode')
    }
let x = document.getElementById('out');
let y = document.getElementById('weatherout');
function geolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        x.innerText = `Geo location is not working`
    }
}
function showPosition(data) {
    console.log(data)
    let lat = data.coords.latitude;
    let long = data.coords.longitude;
    x.innerText = `latitude is '${lat}' and longitude is '${long}'`
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    fetch(url, { method: 'GET' })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let cityName = data.city.name;
            let temp = data.list[0].temp.day;
            y.innerText = `${cityName} has ${temp}°C`
        }
        )

}