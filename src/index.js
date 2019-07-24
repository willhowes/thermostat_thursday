$( document ).ready(function() {
  thermostat = new Thermostat

  $( "#up" ).click(function() {
  thermostat.up();
  $("#temperature").html(thermostat.temperature)
  console.log(thermostat.temperature)
});

$( "#down" ).click(function() {
thermostat.down();
$("#temperature").html(thermostat.temperature)
console.log(thermostat.temperature)
});

$("#temperature").html(thermostat.temperature)

});
