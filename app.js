$(function() {

    $.ajax('http://api.openweathermap.org/data/2.5/forecast?id=6695624&APPID=e8c76f66d65b8c75fd0c19fb4add9aae')

        .done(function(data) {

            var weather = document.querySelector('#weather');

            var newEl = $(`<div style="font-size: 30px"> <i class="fas fa-thermometer-half"></i> Temperature: &nbsp; <span style="font-size: 50px">${Math.round(data.list[0].main.temp -273.15)}</span> </div>`);

                $(weather).append(newEl);

            var newEl1 = $(`<div style="font-size: 30px"> <i class="fas fa-tint"></i> Humidity: &nbsp; <span style="font-size: 50px">${Math.round(data.list[0].main.humidity)}</span></div>`);

                $(weather).append(newEl1);

            var newEl2 = $(`<div style="font-size: 30px"> <i class="fas fa-sun"></i> Sky: &nbsp; ${data.list[0].weather[0].description} </div>`);

                $(weather).append(newEl2);

        })
});