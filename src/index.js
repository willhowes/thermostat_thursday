$( document ).ready(function() {
  var thermostat = new Thermostat

  $( "#up" ).click(function() {
  thermostat.up();
  updateTemperature();
});

  $( "#down" ).click(function() {
  thermostat.down();
  updateTemperature();
  });

  $( "#reset" ).click(function() {
  thermostat.reset();
  updateTemperature();
  });

  $( "#power_save_on" ).click(function() {
  thermostat.powerSaveOn();
  $('#power-saving-status').text('on')
  updateTemperature();
  });

  $( "#power_save_off" ).click(function() {
  thermostat.powerSaveOff();
  $('#power-saving-status').text('off')
  updateTemperature();
  });

  $("button").click(function() {
    updateTemperature();
  });

  updateTemperature();

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUse());

  };

  displayWeather('London');

$('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  displayWeather(city);
});
//
// function displayWeather(city) {
//  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
//  var token = '&c408e84fed20df808c04130f7c6f534b';
//  var units = '&units=metric';
//  $.get(url + token + units, function(data) {
//    $('#current-temperature').text(data.main.temp);
//  });
// };


function displayWeather(city) {
 // var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
 // var token = '&c408e84fed20df808c04130f7c6f534b';
 // var units = '&units=metric';
 $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=c408e84fed20df808c04130f7c6f534b&units=metric', function(data) {
   $('#current-temperature').text(data.main.temp);
 });
};

function displayWeather(city) {
 var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
 var token = 'appid=c408e84fed20df808c04130f7c6f534b';
 var units = 'units=metric';
 $.get(url + '&' + token + '&' + units, function(data) {
   $('#current-temperature').text(data.main.temp);
 });
};
// http://api.openweathermap.org/data/2.5/weather?q=London&appid=c408e84fed20df808c04130f7c6f534b&units=metric

});
