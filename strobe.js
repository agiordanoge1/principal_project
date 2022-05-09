

var five = require("johnny-five");
var board = new five.Board({port: "COM10"});
var presence= new String('not');
var presence2= new String('not');
const express = require('express');
const app = express();
var speed;
var text="bla";

var startTime, endTime;

function start() {
  startTime = new Date();
};

function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  //timeDiff /= 1000;

  // get seconds 
  var ms = Math.round(timeDiff);
  speed = (17/ms)*10;
  var speed2=speed.toFixed(2);
  text= speed2.toString();
  console.log(speed2 + " m/s ");
}


board.on("ready",function(){
    var sensor = new five.Sensor("A0");
    var sensor2= new five.Sensor("A1");
    var led =new five.Led(13);
    sensor.on("change", () => {
      //console.log("sensor value :  %d",sensor.value);
      if(sensor.value >=1000)
      {
        presence='no presence on the first sensor';
        led.off();
      }
      else if(sensor.value<=150)
      {
        start();
        presence='presence on the first sensor';
        led.on();
      }

      if(sensor2.value>=600)
      {
        presence2='no presence on the second sensor';
      }
      else if (sensor2.value<=100)
      {
        end();
        presence2='presence on the second sensor';
      }
    });

  });