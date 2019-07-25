$( document ).ready(function() {
  var thermostat = new Thermostat

  $( "#up" ).click(function() {
  thermostat.up();
  // $("#temperature").html(thermostat.temperature)
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

  $("button").click(function() {
    updateTemperature();
  })

  updateTemperature();

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  }

});
