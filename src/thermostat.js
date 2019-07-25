'use strict';

function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.LOW_USAGE_THRESHOLD = 18;
  this.temperature = this.DEFAULT_TEMP;
  this.MIN_TEMP = 10;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this.isPowerSave = true;
  this.maxTemp = this.MAX_TEMP_PSM_ON;
};

Thermostat.prototype.up = function() {
  if (this.temperature >= this.maxTemp){
    return;
  };
  this.temperature++;
};

Thermostat.prototype.down = function() {
  if (this.temperature <= this.MIN_TEMP){
    return;
  };
  this.temperature--;
};

Thermostat.prototype.powerSaveOn = function() {
  this.isPowerSave = true;
  this.maxTemp = this.MAX_TEMP_PSM_ON;
};

Thermostat.prototype.powerSaveOff = function() {
  this.isPowerSave = false;
  this.maxTemp = this.MAX_TEMP_PSM_OFF;
};

Thermostat.prototype.reset = function() {
  this.temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.energyUse = function() {
  if(this.temperature < this.LOW_USAGE_THRESHOLD) {
    return "low-usage";
  }else if(this.temperature >= this.MAX_TEMP_PSM_ON) {
    return "high-usage";
  }else {
    return "medium-usage";
  };
};
