$( document ).ready(function() {
  var thermostat = new Thermostat

  $( "#up" ).click(function() {
  thermostat.up();
  // $("#temperature").html(thermostat.temperature)
  updateTemperature();
});

  $( "#down" ).click(function() {
  thermostat.down();
  // $("#temperature").html(thermostat.temperature)
  updateTemperature();
  });

  $("button").click(function() {
    $("#temperature").html(thermostat.temperature)
  })

  $("#temperature").html(thermostat.temperature)

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  }

});
