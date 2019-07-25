$( document ).ready(function() {
  var thermostat = new Thermostat

  $( "#up" ).click(function() {
  thermostat.up();
  // $("#temperature").html(thermostat.temperature)
  console.log(thermostat.temperature)
});

  $( "#down" ).click(function() {
  thermostat.down();
  // $("#temperature").html(thermostat.temperature)
  console.log(thermostat.temperature)
  });

  $("button").click(function() {
    $("#temperature").html(thermostat.temperature)
  })

  $("#temperature").html(thermostat.temperature)

});
