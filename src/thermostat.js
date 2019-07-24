function Thermostat() {
  this.DEFAULTTEMP = 20;
  this.temperature = 20;
  this.minTemp = 10;
  this.isPowerSave = true;
  this.maxTemp = 25;
};

Thermostat.prototype.up = function() {
  if (this.temperature >= this.maxTemp){
    throw new Error('Max temperature reached');
  };
  this.temperature++;
};

Thermostat.prototype.down = function() {
  if (this.temperature <= 10){
    throw new Error('Minimum temperature reached');
  };
  this.temperature--;
};

Thermostat.prototype.powerSaveOn = function() {
  this.isPowerSave = true;
  this.maxTemp = 25;
};

Thermostat.prototype.powerSaveOff = function() {
  this.isPowerSave = false;
  this.maxTemp = 32;
};

Thermostat.prototype.reset = function() {
  this.temperature = this.DEFAULTTEMP;
};

Thermostat.prototype.calculateEnergyUse = function() {
  if(this.temperature < 18) {
    return "low-usage";
  }else if(this.temperature > 24) {
    return "high-usage";
  }else {
    return "medium-usage";
  };
};
