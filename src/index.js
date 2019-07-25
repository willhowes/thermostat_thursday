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
  })

  updateTemperature();

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  }

});
