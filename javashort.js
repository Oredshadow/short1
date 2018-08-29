
function decode(link) {
         return decodeURIComponent(decodeURI(decodeURI(link)));
}
  var seconds;
  var temp;

function removem1() {
    var link = getQueryVariable("url");
    var xkl = decode(link);
    var nkl=xkl.replace("&m=1", "");
document.getElementById("reload").innerHTML=nkl;
}
removem1();
document.getElementById('reload').href = window.location.href;
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("?&&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=_");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

  function countdown() {
    seconds = document.getElementById('countdown').innerHTML;
    seconds = parseInt(seconds, 10);

    if (seconds == 0) {
      temp = document.getElementById('countdown');
      document.getElementById("getlink").innerHTML = "Get Link";
      document.getElementById("getlink").href = document.getElementById("reload").innerHTML;
      if (document.getElementById('statut').innerHTML == 1) {
       window.location.href = document.getElementById("reload").innerHTML;
      }
    } 
   if (seconds == 1) {
      document.getElementById("getlink").innerHTML = "Please Wait";
    }
    seconds--;
    temp = document.getElementById('countdown');
    temp.innerHTML = seconds;
    timeoutMyOswego = setTimeout(countdown, 1500);
  } 
setTimeout(function(){ countdown(); }, 5000);

function radialTimer() {
 var self = this;

 this.seconds = 0;
 this.count = 0;
 this.degrees = 0;
 this.interval = null;
 this.timerHTML = "<div class='n'></div><div class='slice'><div class='q'></div><div class='pie r'></div><div class='pie l'></div></div>";
 this.timerContainer = null;
 this.number = null;
 this.slice = null;
 this.pie = null;
 this.pieRight = null;
 this.pieLeft = null;
 this.quarter = null;

 this.init = function(e, s) {
  self.timerContainer = $("#" + e);
  self.timerContainer.html(self.timerHTML);
  
  self.number = self.timerContainer.find(".n");
  self.slice = self.timerContainer.find(".slice");
  self.pie = self.timerContainer.find(".pie");
  self.pieRight = self.timerContainer.find(".pie.r");
  self.pieLeft = self.timerContainer.find(".pie.l");
  self.quarter = self.timerContainer.find(".q");

  // start timer
  self.start(s);
 }

 this.start = function(s) {
  self.seconds = s;
  self.interval = window.setInterval(function () {
   self.number.html(self.seconds - self.count);
   self.count++;

   if (self.count > (self.seconds - 1)) clearInterval(self.interval);

   self.degrees = self.degrees + (360 / self.seconds);
   if (self.count >= (self.seconds / 2)) {
    self.slice.addClass("nc");
    if (!self.slice.hasClass("mth")) self.pieRight.css({"transform":"rotate(180deg)"});
    self.pieLeft.css({"transform":"rotate(" + self.degrees + "deg)"});
    self.slice.addClass("mth");
    if (self.count >= (self.seconds * 0.75)) self.quarter.remove();
   } else {
    self.pie.css({"transform":"rotate(" + self.degrees + "deg)"});
   }
  }, 1000);
 }
}

var Timer;

$(document).ready(function() {
 Timer = new radialTimer();
 seconds = document.getElementById('countdown').innerHTML;
 Timer.init("timer", seconds);
